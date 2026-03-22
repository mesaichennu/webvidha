import { useState } from "react";
import { Outlet } from "react-router";
import { SplashScreen } from "./SplashScreen";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Root() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
