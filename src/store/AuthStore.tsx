import { create } from "zustand";
import { supabase } from "../index";

interface AuthStore {
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
    loginGoogle: async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
        })
    },
    logout: async () => {
        await supabase.auth.signOut();
    }
}))