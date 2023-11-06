import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config, env }: ConfigContext & { env?: NodeJS.ProcessEnv }): Partial<ExpoConfig> => {
  // ENV GET
  // EAS ENV FOR BUILD GET IN eas.json or script of package.json or (secrets env cloud expo.dev work only for eas build, read more ./description.env)
  const ENV = {
    ...process.env,
    ...env,
  };

  const { EXPO_PUBLIC_APP_ENV, EXPO_PUBLIC_PACKAGE_NAME_SUFFIX, SENTRY_ORG, SENTRY_PROJECT, SENTRY_AUTH_TOKEN } = ENV;

  const androidConfig = config.android;
  const iosConfig = config.ios;

  // DEFAULT CONFIG
  const packageName = '{{packageName}}';
  // VERSION DEFAULT FOR PRODUCTION, USING main for staging - iosBuild and androidBuild default 1 on staging
  const versions = {
    main: '0.0.1', // Require INCREMENT if up to store IOS for submit for review. Need bigger than the current version ready for sale [READ IMPORTANCE NOTE BELOW]
    iosBuild: '1', // Require INCREMENT if up to TestFlight
    androidBuild: 1, // Require INCREMENT if up to store ANDROID, Need bigger than the last build version in library in google play console.
  };

  // [IMPORTANCE NOTE] The expo-updates check update by this version. config   "runtimeVersion": { "policy": "appVersion" }, Ref: https://docs.expo.dev/eas-update/runtime-versions/#appversion-runtime-version-policy-available-in-sdk-46-and-higher
  config.version = versions.main;

  config.hooks = {
    ...config.hooks,
    postPublish: [
      ...(config.hooks?.postPublish ?? []),

      // Sentry config postPublish only work for eas build, for other cli using `upload-sentry-sourcemap` script
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: SENTRY_ORG,
          project: SENTRY_PROJECT,
          authToken: SENTRY_AUTH_TOKEN,
        },
      },
    ],
  };

  // [PRODUCTION] CONFIG
  if (EXPO_PUBLIC_APP_ENV === 'production') {
    // PRODUCTION CONFIG
    return {
      ...config,
      android: {
        ...androidConfig,
        versionCode: versions.androidBuild,
        package: packageName,
      },
      ios: {
        ...iosConfig,
        buildNumber: versions.iosBuild,
        bundleIdentifier: packageName,
      },
    };
  }

  // *
  // *
  // *
  // *
  // *
  // STAGING, ZIGVY CONFIG OR AN OTHER CONFIG
  const APP_NAME_PREFIX = EXPO_PUBLIC_PACKAGE_NAME_SUFFIX?.[0]?.toUpperCase() ?? 'S';
  // THE APP NAME BY ENV
  config.name = `[${APP_NAME_PREFIX || ''}]${config.name ?? ''}`;

  const _packageName = `${packageName}.${EXPO_PUBLIC_PACKAGE_NAME_SUFFIX ?? 'staging'}`;

  return {
    ...config,
    android: {
      ...androidConfig,
      package: _packageName,
    },
    ios: {
      ...iosConfig,
      bundleIdentifier: _packageName,
    },
  };
};
