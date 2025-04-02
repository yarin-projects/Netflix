import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthenticationPage } from "./src/screens/AuthenticationPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AuthenticationPage />
  </StrictMode>,
);
