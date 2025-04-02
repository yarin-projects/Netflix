import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContentBlocks } from "./src/screens/ContentBlocks";
import { AuthenticationPage } from "./src/screens/AuthenticationPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AuthenticationPage />
  </StrictMode>,
);
