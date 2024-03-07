import { createClient } from "@supabase/supabase-js/"

const supaBaseUrl = "https://whwmzevsajfomnepcyzz.supabase.co"
const supaBaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod216ZXZzYWpmb21uZXBjeXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNzgyMDcsImV4cCI6MjAyNDg1NDIwN30.EXdeEKICSiBhxo2fjLyXE10eOlbC7CVIdmbDyHrv_GI"

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey)