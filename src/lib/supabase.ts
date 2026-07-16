/// <reference types="vite/client" />

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Rsvp = {
  id: string;
  name: string;
  attendance: 'attending' | 'not_attending';
  guest_count: number;
  message: string | null;
  created_at: string;
};

export type Wish = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};
