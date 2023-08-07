import { createClient } from '@supabase/supabase-js';

// Supabase URL for your project
const supabaseUrl = 'https://vlslwrnugfrtqoryqjdg.supabase.co';

// Supabase anonymous key for authentication
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsc2x3cm51Z2ZydHFvcnlxamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNDAyODIsImV4cCI6MjAwNjcxNjI4Mn0.lmi-oRQPrKmsGS4LyJKKoqr_2ez6cB6p4rifyoTs0Ws';

// Create the Supabase client using the provided URL and key
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
