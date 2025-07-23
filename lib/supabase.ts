import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactMessage {
  id?: string
  first_name: string
  last_name: string
  email: string
  subject: string
  message: string
  status: "new" | "read" | "replied"
  created_at?: string
}

export interface BlogPost {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  published: boolean
  featured: boolean
  category: string
  tags: string[]
  image_url?: string
  views: number
  likes: number
  created_at?: string
  updated_at?: string
}

export interface ProjectView {
  id?: string
  project_id: string
  user_ip?: string
  created_at?: string
}

export interface NewsletterSubscriber {
  id?: string
  email: string
  subscribed: boolean
  created_at?: string
}
