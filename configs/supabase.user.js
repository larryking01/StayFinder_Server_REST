import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

if (!process.env.STAYFINDER_PROJECT_URL) {
  throw new Error('STAYFINDER_PROJECT_URL is missing');
}

if (!process.env.STAY_FINDER_SERVICE_ROLE_KEY) {
  throw new Error('SERVICE ROLE KEY is missing');
}

const supabaseUser = createClient(
  process.env.STAYFINDER_PROJECT_URL,
  process.env.STAY_FINDER_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false
    },
    global: {
        headers: {
            Authorization: request.headers.authorization
        }
    }
  }
);

async function test() {
  const { data, error } = await supabaseUser
    .from('users')
    .select('*');

  console.log({ data, error });
}

// test();

export default supabaseUser;
