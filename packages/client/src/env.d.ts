/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly RIOT_API_KEY: string;
    readonly TEST: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
