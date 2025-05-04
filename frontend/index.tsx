import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthenticationPage } from "./src/screens/AuthenticationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./src/screens/LandingPage/LandingPage";
import { HomePage } from "./src/screens/HomePage/HomePage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<AuthenticationPage />} />
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  </StrictMode>
);
