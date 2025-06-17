import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://znpdhijgcjkmdmolxvcj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucGRoaWpnY2prbWRtb2x4dmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NTk0MjcsImV4cCI6MjA2NTAzNTQyN30.ABO4LmKGxh-XpC1IUpP6atQie5s5CpN5eo80TnW3JnM';

export const supabase = createClient(supabaseUrl, supabaseKey);
