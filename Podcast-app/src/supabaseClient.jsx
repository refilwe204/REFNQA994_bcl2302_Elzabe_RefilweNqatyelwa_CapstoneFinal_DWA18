
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yxwmvldvazvjzmqguwdd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4d212bGR2YXp2anptcWd1d2RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNDM3MjEsImV4cCI6MjAwNjcxOTcyMX0.eBENpEeyIGLgWw1Rs54Lj3RjioHwg5ijOTg8OdV5Z0w'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase