const punycode = require('punycode');

const domain = 'example.com';
const encodedDomain = punycode.toASCII(domain);

console.log(encodedDomain);