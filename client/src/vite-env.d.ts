/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GITHUB_CLIENT_ID: string;
  VITE_PORT: number;
  VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
