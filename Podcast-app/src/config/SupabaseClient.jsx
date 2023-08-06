
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vlslwrnugfrtqoryqjdg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsc2x3cm51Z2ZydHFvcnlxamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNDAyODIsImV4cCI6MjAwNjcxNjI4Mn0.lmi-oRQPrKmsGS4LyJKKoqr_2ez6cB6p4rifyoTs0Ws'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase