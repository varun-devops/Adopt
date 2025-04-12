"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// Import both Header and Footer components
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <Header />
      <main className="relative flex grow flex-col pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
