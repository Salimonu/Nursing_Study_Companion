import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://dljabcahekwtgluwbfwi.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsamFiY2FoZWt3dGdsdXdiZndpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwODc5NDEsImV4cCI6MjA3NTY2Mzk0MX0.e8RxTcXxWbAiV7PYvlLS5ZPcGPKzGJwjkQAcsJ6ElAw';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export default supabase;
