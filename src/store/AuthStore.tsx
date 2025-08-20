import { create } from "zustand";
import { supabase } from "../index";

interface AuthStore {
  loginGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>(() => ({
    loginGoogle: async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: window.location.origin + "/auth/callback",
            },
        });

        if (error) {
            console.error("Error iniciando sesión:", error.message);
        }
    },
    logout: async () => {
        await supabase.auth.signOut();
    }
}))