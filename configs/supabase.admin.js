import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';



let stayFinderProjectURL = process.env.STAYFINDER_PROJECT_URL
let stayFinderServiceRoleKey = process.env.STAY_FINDER_SERVICE_ROLE_KEY

if (!stayFinderProjectURL) {
  throw new Error('STAYFINDER_PROJECT_URL is missing');
}

if (!stayFinderServiceRoleKey) {
  throw new Error('SERVICE ROLE KEY is missing');
}

const supabaseAdmin = createClient(
  stayFinderProjectURL,
  stayFinderServiceRoleKey,
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
