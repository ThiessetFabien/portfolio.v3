const validator = require('validator');
const val = validator.normalizeEmail('test@test.com');
console.log('val:', val);
try {
  console.log(validator.isEmpty(val));
} catch (e) {
  console.log('error:', e.message);
}
