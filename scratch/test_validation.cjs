const validator = require('validator');

const test = (reqBody) => {
    const { name: rawName, email: rawEmail, message: rawMessage, 'bot-field': botField } = reqBody;

    console.log('--- Test ---');
    console.log('Input Body:', reqBody);

    if (
        typeof rawName !== 'string' || 
        typeof rawEmail !== 'string' || 
        typeof rawMessage !== 'string'
    ) {
        console.log('Result: 400 - Format de données invalide (Type Check)');
        return;
    }

    if (botField) {
        console.log('Result: 200 - OK (Honeypot)');
        return;
    }

    const name = validator.escape(rawName.trim());
    const message = validator.escape(rawMessage.trim());
    
    if (validator.isEmpty(name) || validator.isEmpty(rawEmail.trim()) || validator.isEmpty(message)) {
        console.log('Result: 400 - Tous les champs sont obligatoires');
        return;
    }

    const email = validator.normalizeEmail(rawEmail);
    if (!email || !validator.isEmail(email)) {
        console.log('Result: 400 - Email invalide');
        return;
    }

    if (!validator.isLength(name, { min: 2, max: 100 })) {
        console.log('Result: 400 - Le nom doit contenir entre 2 et 100 caractères');
        return;
    }

    if (!validator.isLength(message, { min: 10, max: 5000 })) {
        console.log('Result: 400 - Le message doit contenir entre 10 et 5000 caractères');
        return;
    }

    console.log('Result: 200 - OK');
};

test({ name: 'Fabien', email: 'test@example.com', message: 'Ceci est un message de test valide.' });
test({ name: 123, email: 'test@example.com', message: 'Ceci est un message.' }); // Invalid type
test({ name: 'F', email: 'test@example.com', message: 'Trop court' }); // Length check
test({ name: 'Fabien', email: '', message: 'Message' }); // Empty email
test({ name: 'Fabien', email: 'test@example.com', message: 'Message', 'bot-field': 'spam' }); // Honeypot
