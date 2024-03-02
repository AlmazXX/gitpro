/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GITHUB_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
