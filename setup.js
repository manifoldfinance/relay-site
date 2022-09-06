const packageJson = require('./package.json');
const date = new Date();
const GIT_COMMIT_SHA_SHORT = typeof process.env.GIT_COMMIT_SHA === 'string' && process.env.GIT_COMMIT_SHA.substring(0, 8);

// Don't delete this console log, useful to see the config in Vercel deployments
console.log('process.env.GIT_COMMIT_SHA: ', process.env.GIT_COMMIT_SHA);
console.log('process.env.BUILD_ID: ', process.env.BUILD_ID);
console.log('windi.config.js', JSON.stringify(module.exports, null, 2))