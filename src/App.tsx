import { ThemeProvider, createGlobalStyle } from "styled-components"
import { createContext, useState } from "react"
import { Light, Dark, Login } from "./index"

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
        <GlobalStyle />
        <Login />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App

// const Container = styled.div`
//   margin: 0;
// `

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
  }
`;
