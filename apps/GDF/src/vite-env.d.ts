/// <reference types="vite/client" />
export interface ImportMetaEnv {
  readonly VITE_API: string
  readonly VITE_API_VERSION: string
  // more env variables...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
