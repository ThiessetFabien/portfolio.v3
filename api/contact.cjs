const nodemailer = require('nodemailer');

/**
 * Handler pour Alwaysdata (Node.js)
 * Validation manuelle sans validator.normalizeEmail qui retourne `false` sur email invalide.
 */
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const body = req.body || {};
  const name    = (body.name    || '').toString().trim();
  const email   = (body.email   || '').toString().trim().toLowerCase();
  const message = (body.message || '').toString().trim();
  const botField = body['bot-field'];

  // 1. Protection Honeypot
  if (botField) {
    console.log('Spam détecté via honeypot');
    return res.status(200).json({ success: true });
  }

  // 2. Validation des champs
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ error: 'Le nom doit contenir entre 2 et 100 caractères.' });
  }

  if (message.length < 10 || message.length > 5000) {
    return res.status(400).json({ error: 'Le message doit contenir entre 10 et 5000 caractères.' });
  }

  // 3. Vérification des variables d'environnement
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Variables SMTP manquantes : SMTP_USER ou SMTP_PASS non définies.');
    return res.status(500).json({ error: 'Configuration serveur incomplète. Contactez l\'administrateur.' });
  }

  // Log de debug sécurisé (affiche juste le début de l'user)
  console.log(`Tentative d'envoi via SMTP: ${process.env.SMTP_USER.substring(0, 3)}...`);

  try {
    const smtpHost = (process.env.SMTP_HOST || 'smtp.alwaysdata.com').replace(/"/g, '').trim();
    const smtpUser = (process.env.SMTP_USER || '').replace(/"/g, '').trim();
    const smtpPass = (process.env.SMTP_PASS || '').replace(/"/g, '').trim();
    const smtpPort = parseInt((process.env.SMTP_PORT || '465').replace(/"/g, '').trim());

    const transporter = nodemailer.createTransport({
      host:   smtpHost,
      port:   smtpPort,
      secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const contactEmail = (process.env.CONTACT_EMAIL || smtpUser).replace(/"/g, '').trim();
    const recipient = contactEmail;

    const mailOptions = {
      from:    `"Portfolio Contact" <${smtpUser}>`,
      to:      recipient,
      replyTo: email,
      subject: `[Portfolio] Message de ${name}`,
      text:    `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2dd4bf; margin-top: 0;">Nouveau message du Portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 80px;">Nom</td>
              <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2dd4bf;">${email}</a></td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.7; color: #334155;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Erreur SMTP:', error.message);
    return res.status(500).json({ error: 'Erreur lors de l\'envoi du mail. Réessayez plus tard.' });
  }
};
