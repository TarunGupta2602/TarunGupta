// 
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://akmibkhrdxcbabxvsufh.supabase.co'
const supabaseKey = KdbCK8IEGOEqzk
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;