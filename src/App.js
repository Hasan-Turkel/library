import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import { useThemeContext } from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";
import BooksContextProvider from "./context/BooksContext";

function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themes}>
        <GlobalStyles />
        <AuthContextProvider>
          <BooksContextProvider>
            <AppRouter />
          </BooksContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
