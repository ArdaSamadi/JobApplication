import { createTheme, ThemeProvider } from "@mui/material/styles";
// import UserForm from "./UserForm/UserForm";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  // BrowserRouter,
  // createBrowserRouter,
  // createRoutesFromElements,
  Route,
  // RouterProvider,
  // Routes,
  Routes,
  // Switch,
} from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
// import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/notFound";
import Register from "./components/RegisterForm";
// import { Router } from "react-router-dom/cjs/react-router-dom";
// import { Switch } from "react-router-dom/cjs/react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f3920F",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f7f7f7",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Work />
                </>
              }
            />

            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
