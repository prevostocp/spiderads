interface ImportMetaEnv {
  readonly VITE_APP_SUPABASE_URL: string;
  readonly VITE_APP_SUPABASE_ANON_KEY: string;
  // Puedes agregar más variables aquí si es necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}