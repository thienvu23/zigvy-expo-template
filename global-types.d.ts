export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // EAS env
      EXPO_PUBLIC_APP_ENV: 'production' | 'staging';
      EXPO_PUBLIC_PACKAGE_NAME_SUFFIX: 'dev' | 'staging' | 'zigvy';
      //
      EXPO_PUBLIC_API_URL: string;
      EXPO_PUBLIC_API_URL_STAGING: string;

      EXPO_PUBLIC_SENTRY_DSN: string;
      SENTRY_AUTH_TOKEN: string;
      SENTRY_ORG: string;
      SENTRY_PROJECT: string;
    }
  }
}
