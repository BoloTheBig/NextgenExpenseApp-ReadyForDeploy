import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL & anon key or set env variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const SUPABASE_ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-public-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
