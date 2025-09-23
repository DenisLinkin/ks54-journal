/* ============================== REACT ROUTER ============================== */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/* ============================== REACT QUERY ============================== */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/* ============================== MANTINE ============================== */
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

/* ============================== ЦВЕТОВАЯ ПАЛИТРА ============================== */
import { theme } from "./styles/theme";

/* ============================== СТРАНИЦЫ ============================== */
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
import Settings from "./pages/Settings";
import { NavbarProvider } from "./context/NavbarContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <NavbarProvider>
                  <AppLayout />
                </NavbarProvider>
              }
            >
              <Route index element={<Navigate replace to="главная" />} />
              <Route path="/главная" element={<Home />} />
              <Route path="/расписание" element={<Schedule />} />
              <Route path="/экзамены" element={<Exams />} />
              <Route path="/журналы" element={<Journals />} />
              <Route path="/отчёты" element={<Report />} />
              <Route path="/посещения" element={<Attendance />} />
              <Route path="/люди" element={<People />} />
              <Route path="/настройки" element={<Settings />} />
            </Route>

            <Route path="/авторизация" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  );
}
