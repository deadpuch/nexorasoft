import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactLenis } from "lenis/react";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <Nav />
      <App />
      <Footer />
    </ReactLenis>
  </StrictMode>,
);
