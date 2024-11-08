export const getEnvVar = (variable: keyof ImportMetaEnv): string =>
  window?._config?.[variable] ?? `${import.meta.env[variable]}`;
