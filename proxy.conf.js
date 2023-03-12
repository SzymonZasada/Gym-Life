const PROXY_CONFIG = [
  {
    context: ['/rest/**'],
    target: 'http://localhost:8001',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
  },
];

module.exports = PROXY_CONFIG;
