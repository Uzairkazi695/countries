import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
