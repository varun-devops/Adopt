import React from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function FundingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative flex grow flex-col pt-16 md:pt-20">{children}</main>
      <Footer />
    </>
  );
}
