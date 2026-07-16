import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
