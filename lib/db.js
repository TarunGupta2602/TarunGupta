// 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Use the service role key here
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


// lib/db.js
// import mysql from 'mysql2/promise';

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'radharadha',
//   database: 'your_database',
// });

// export default pool;
