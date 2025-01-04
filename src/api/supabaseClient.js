import { createClient } from '@supabase/supabase-js';

// 1) project url
const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL;
// 2) anon key
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY,{
    auth: {
        persistSession: true, // 세션 자동 복원 활성화
        autoRefreshToken: true, // 토큰 자동 갱신 활성화
      },
});


export default supabase;
