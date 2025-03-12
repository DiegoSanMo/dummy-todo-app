import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Tasks from "./pages/Tasks.tsx";
import TaskProvider from "./providers/TaskProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </StrictMode>
);
