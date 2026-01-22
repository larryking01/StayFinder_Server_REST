import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

if (!process.env.STAYFINDER_PROJECT_URL) {
  throw new Error('STAYFINDER_PROJECT_URL is missing');
}

if (!process.env.STAY_FINDER_SERVICE_ROLE_KEY) {
  throw new Error('SERVICE ROLE KEY is missing');
}

const supabasePublic = createClient(
  process.env.STAYFINDER_PROJECT_URL,
  process.env.STAYFINDER_ANON_KEY,
  {
    auth: {
      persistSession: false
    }
  }
);

async function test() {
  const { data, error } = await supabasePublic
    .from('users')
    .select('*');

  console.log({ data, error });
}

// test();

export default supabasePublic;
