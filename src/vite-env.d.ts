/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string;
  readonly VITE_URL: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}