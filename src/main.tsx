
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
import { i18nReady } from "./app/i18n/config";

i18nReady.then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
  