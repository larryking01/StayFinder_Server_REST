import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

if (!process.env.STAYFINDER_PROJECT_URL) {
  throw new Error('STAYFINDER_PROJECT_URL is missing');
}

if (!process.env.STAY_FINDER_SERVICE_ROLE_KEY) {
  throw new Error('SERVICE ROLE KEY is missing');
}

const supabaseAdmin = createClient(
  process.env.STAYFINDER_PROJECT_URL,
  process.env.STAY_FINDER_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false
    }
  }
);

async function test() {
  const { data, error } = await supabaseAdmin
    .from('users')
    .select('*');

  console.log({ data, error });
}

// test();

export default supabaseAdmin;
