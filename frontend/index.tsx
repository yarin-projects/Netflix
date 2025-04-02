import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthenticationPage } from "./src/screens/AuthenticationPage";
import { LandingPage } from "./src/screens/LandingPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
