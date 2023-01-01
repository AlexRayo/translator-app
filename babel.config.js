module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',//Reanimated plugin has to be listed last. Then >>> npm start -- --reset-cache
    ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": true,
        "allowUndefined": true}],
  ],
};
