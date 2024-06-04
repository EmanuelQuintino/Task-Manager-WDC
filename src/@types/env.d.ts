/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API: string;
  readonly VITE_USER_ID_AUTH_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
