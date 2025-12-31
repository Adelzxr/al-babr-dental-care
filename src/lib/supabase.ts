import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a mock client that logs warnings when used without credentials
const createMockClient = () => {
  const handler = {
    get: () => {
      return () => {
        console.warn('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.');
        return Promise.resolve({ data: null, error: new Error('Supabase not configured') });
      };
    },
  };
  return new Proxy({} as SupabaseClient, handler);
};

let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    'Missing Supabase environment variables. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file.'
  );
  supabase = createMockClient();
}

export { supabase };
export default supabase;
