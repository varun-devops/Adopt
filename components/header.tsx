"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <h1>Website Name</h1>
      <nav>
        {/* ...existing navigation links... */}
        <Link
          href="/sign-in"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Sign In
        </Link>
      </nav>
    </header>
  );
}
