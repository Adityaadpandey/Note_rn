const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  ...defaultConfig,
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'], // Ensure these are included
  },
};
