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


function createUserSupabaseClient( req ) {
  return createClient(
    stayFinderProjectURL,
    stayFinderAnonymousKey,
    {
      auth: {
        persistSession: false
      },
      global: {
        headers: {
          Authorization: req.headers.authorization       
       }
      }
    }
  )
}

export default createUserSupabaseClient;
