import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://aocpphpsuqpdljyxmiwo.supabase.co',
  'sb_secret_UJBPGFmVxGH1HZLbBGdhnQ_eh5HKevY'
);

export default supabase;
