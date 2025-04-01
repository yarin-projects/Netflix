import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContentBlocks } from "./src/screens/ContentBlocks";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ContentBlocks />
  </StrictMode>,
);
