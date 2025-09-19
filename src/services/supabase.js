import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nlrqrpgtwsltqnvacvzu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5scnFycGd0d3NsdHFudmFjdnp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgwMjczOTksImV4cCI6MjA3MzYwMzM5OX0.cqPRKgQLZCnRLdL8O0LqIpArIsI5fhIlQciblN_Ju2c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
