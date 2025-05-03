"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Sign In button clicked");
    // Simulate navigation after successful login
    router.push("/dashboard");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/path-to-galaxy-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "2rem",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "400px",
          color: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "0.5rem" }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "0.5rem" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <a href="/forgot-password" style={{ color: "#4CAF50", textDecoration: "none" }}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
