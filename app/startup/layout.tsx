import React from "react";
// Import both Header and Footer components
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function StartupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative flex grow flex-col">{children}</main>
      <Footer />
    </>
  );
}
