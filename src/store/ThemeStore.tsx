import { create } from "zustand";
import { Light, Dark } from "../styles/themes";

// si tenés un tipo para el theme object lo podés usar acá
// por ejemplo ThemeType = typeof Light
type ThemeName = "light" | "dark";

interface ThemeStore {
  theme: ThemeName;
  themeStyle: typeof Light; // ambos (Light y Dark) deben tener misma estructura
  setTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: "light",
  themeStyle: Light,
  setTheme: () => {
    const { theme } = get();
    const newTheme: ThemeName = theme === "light" ? "dark" : "light";
    set({
      theme: newTheme,
      themeStyle: newTheme === "light" ? Light : Dark,
    });
  },
}));
