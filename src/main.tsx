import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { initConsentApi } from "./app/consent/consentApi";
import "./styles/index.css";

initConsentApi();

createRoot(document.getElementById("root")!).render(<App />);
