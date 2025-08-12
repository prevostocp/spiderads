import { styled, ThemeProvider } from "styled-components"
import { createContext, useState } from "react"
import { Light, Dark, Home } from "./index"

// Define el tipo para el contexto
type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

// export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {}
});

function App() {
  const [theme, setTheme] = useState("dark")
  const themeStyle = theme === "light" ? Light : Dark;
 
  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle} >
        <h1>Spider Ad - faucet, ptc, autosurf and more</h1>
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App

const Container = styled.div`

`
