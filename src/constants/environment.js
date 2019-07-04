import Constants from 'expo-constants';

const ENV = {
  dev: {
    apiUrl: 'http://99d89c96.ngrok.io',
    respTime: '5000',
  },
  staging: {
    apiUrl: 'http://localhost',
    respTime: '5000',
  },
  prod: {
    apiUrl: 'http://localhost',
    respTime: '5000',
  },
};

// eslint-disable-next-line consistent-return
function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('dev') !== -1) return ENV.dev;
  if (env.indexOf('staging') !== -1) return ENV.staging;
  if (env.indexOf('prod') !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.releaseChannel);
