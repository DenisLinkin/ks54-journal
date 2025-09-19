/* ============================== REACT ROUTER ============================== */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/* ============================== MANTINE ============================== */
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

/* ============================== THEME ============================== */
import { theme } from "./styles/theme";

/* ============================== PAGES ============================== */
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Exams from "./pages/Exams";
import PageNotFound from "./pages/PageNotFound";
import Journals from "./pages/Journals";
import Report from "./pages/Report";
import Attendance from "./pages/Attendance";
import People from "./pages/People";
import AccessRights from "./pages/AccessRights";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/report" element={<Report />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/people" element={<People />} />
            <Route path="/access-rights" element={<AccessRights />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
