const path = require('path');

// Não é necessário compilar o arquivo TS, apenas usamos o objeto exportado
const config = require('./next-i18next.config.ts').default;

// Configuração adicional que o next-i18next pode precisar
config.localePath = path.resolve('./public/locales');

module.exports = config;