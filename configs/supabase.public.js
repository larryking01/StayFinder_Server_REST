import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';




let stayFinderProjectURL = process.env.STAYFINDER_PROJECT_URL
let stayFinderAnonymousKey = process.env.STAYFINDER_ANON_KEY


if (!stayFinderProjectURL) {
  throw new Error('STAYFINDER_PROJECT_URL is missing');
}

if (!stayFinderAnonymousKey) {
  throw new Error('SERVICE ANONYMOUS KEY is missing');
}

const supabasePublic = createClient(
  stayFinderProjectURL,
  stayFinderAnonymousKey,
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
