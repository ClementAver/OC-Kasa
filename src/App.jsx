import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

const theme = {
  base: {
    primary: "#FF6060",
    solidText: "#fff",
  },
};

function App() {
  useEffect(() => {
    <Navigate
      to="/home"
      replace={true}
    />;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header color={theme.base.primary} />
        <Outlet />
        <Footer color={"white"} />
      </div>
    </ThemeProvider>
  );
}

export default App;
