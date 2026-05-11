const validator = require('validator');

/**
 * Logique de validation identique à api/contact.cjs
 */
function validate(reqBody) {
    const { name: rawName, email: rawEmail, message: rawMessage, 'bot-field': botField } = reqBody;

    if (typeof rawName !== 'string' || typeof rawEmail !== 'string' || typeof rawMessage !== 'string') {
        return { status: 400, error: 'Format de données invalide (Type Check)' };
    }

    if (botField) {
        return { status: 200, message: 'OK (Honeypot)' };
    }

    const name = validator.escape(rawName.trim());
    const message = validator.escape(rawMessage.trim());
    
    if (validator.isEmpty(name)) return { status: 400, error: 'Nom manquant' };
    if (validator.isEmpty(rawEmail.trim())) return { status: 400, error: 'Email manquant' };
    if (validator.isEmpty(message)) return { status: 400, error: 'Message manquant' };

    const email = validator.normalizeEmail(rawEmail);
    if (!email || !validator.isEmail(email)) {
        return { status: 400, error: 'Format d\'email invalide' };
    }

    if (!validator.isLength(name, { min: 2, max: 100 })) {
        return { status: 400, error: 'Nom trop court/long (2-100 car.)' };
    }

    if (!validator.isLength(message, { min: 10, max: 5000 })) {
        return { status: 400, error: 'Message trop court/long (10-5000 car.)' };
    }

    return { status: 200, message: 'OK' };
}

const testCases = [
    { name: '✅ Cas Valide', body: { name: 'Fabien', email: 'test@example.com', message: 'Ceci est un message de test valide.' } },
    { name: '❌ Type Invalide', body: { name: 123, email: 'test@example.com', message: '...' } },
    { name: '❌ Nom Vide', body: { name: '', email: 'test@example.com', message: 'Un long message' } },
    { name: '❌ Email Vide', body: { name: 'Fabien', email: '', message: 'Un long message' } },
    { name: '❌ Message Vide', body: { name: 'Fabien', email: 'test@example.com', message: '' } },
    { name: '❌ Email Invalide', body: { name: 'Fabien', email: 'not-an-email', message: 'Un long message' } },
    { name: '❌ Nom trop court', body: { name: 'F', email: 'test@example.com', message: 'Un long message' } },
    { name: '❌ Message trop court', body: { name: 'Fabien', email: 'test@example.com', message: 'Court' } },
    { name: '🛡️ Honeypot', body: { name: 'Bot', email: 'bot@spam.com', message: '...', 'bot-field': 'spam' } },
];

console.log('\n--- 🧪 SUITE DE TESTS : FORMULAIRE DE CONTACT ---\n');
console.log('| ' + 'Cas de Test'.padEnd(25) + ' | ' + 'Statut'.padEnd(6) + ' | ' + 'Résultat / Erreur'.padEnd(35) + ' |');
console.log('|' + '-'.repeat(27) + '|' + '-'.repeat(8) + '|' + '-'.repeat(37) + '|');

testCases.forEach(tc => {
    const res = validate(tc.body);
    const statusStr = res.status.toString();
    const resultStr = res.error || res.message;
    console.log('| ' + tc.name.padEnd(25) + ' | ' + statusStr.padEnd(6) + ' | ' + resultStr.padEnd(35) + ' |');
});

console.log('\n--- FIN DES TESTS ---\n');
