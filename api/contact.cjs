const nodemailer = require('nodemailer');
const validator = require('validator');

/**
 * Handler pour Alwaysdata (Node.js)
 * Ce script reçoit les données du formulaire et les envoie par mail.
 */
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  // 1. Validation de type stricte (Sécurité Anti-Injection)
  const { name: rawName, email: rawEmail, message: rawMessage, 'bot-field': botField } = req.body;

  if (
    typeof rawName !== 'string' || 
    typeof rawEmail !== 'string' || 
    typeof rawMessage !== 'string'
  ) {
    console.error('Validation échouée: Types invalides');
    return res.status(400).json({ error: 'Format de données invalide' });
  }

  // 2. Protection Honeypot
  if (botField) {
    console.log('Spam détecté via honeypot');
    return res.status(200).json({ success: true, message: 'Message traité' });
  }

  // 3. Nettoyage et Validation
  const name = validator.escape(rawName.trim());
  const message = validator.escape(rawMessage.trim());
  
  // normalizeEmail peut renvoyer false, on doit d'abord vérifier s'il est vide
  if (validator.isEmpty(name) || validator.isEmpty(rawEmail.trim()) || validator.isEmpty(message)) {
    console.error('Validation échouée: Champs vides');
    return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
  }

  const email = validator.normalizeEmail(rawEmail);
  if (!email || !validator.isEmail(email)) {
    console.error('Validation échouée: Email invalide');
    return res.status(400).json({ error: 'Email invalide' });
  }

  if (!validator.isLength(name, { min: 2, max: 100 })) {
    return res.status(400).json({ error: 'Le nom doit contenir entre 2 et 100 caractères' });
  }

  if (!validator.isLength(message, { min: 10, max: 5000 })) {
    return res.status(400).json({ error: 'Le message doit contenir entre 10 et 5000 caractères' });
  }

  try {
    // 3. Configuration SMTP Alwaysdata
    // Ces variables devront être configurées dans l'environnement Alwaysdata
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.alwaysdata.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #2dd4bf;">Nouveau message du Portfolio</h2>
          <p><strong>De:</strong> ${name} (&lt;${email}&gt;)</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur SMTP:', error);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi du mail' });
  }
};
