process.env.TAMAGUI_TARGET = 'native';

module.exports = function (api) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // optional, only if you ever use process.env
      // NOTE: this is optional, you don't *need* the compiler
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './tamagui.config',
          logTimings: true,
        },
      ],
      // NOTE: this is only necessary if you are using reanimated for animations
      'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  };
};
