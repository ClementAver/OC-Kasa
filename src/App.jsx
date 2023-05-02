import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Header from "./components/Header/Header";
import NotFound from "./components/pages/NotFound/Notfound";
import Location from "./components/pages/Location/Location";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/location/:id"
          element={<Location />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
