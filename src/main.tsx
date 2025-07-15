import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
// import { Toaster } from "react-hot-toast";

import GlobalToast from "./components/GlobalToast.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <GlobalToast />
      <App />
    </Provider>
  </StrictMode>
);
