"use client";

import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // For now this is just a placeholder.
    // We’ll wire it up to Supabase login later.
    console.log("Login attempt:", { email, password });
    setStatus("Login form submitted (not wired to auth yet).");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#f9fafb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          padding: 24,
          borderRadius: 16,
          background: "#020617",
          boxShadow: "0 20px 45px rgba(0,0,0,0.6)",
          border: "1px solid rgba(148,163,184,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Adventurer Login
        </h1>

        <p
          style={{
            fontSize: 14,
            color: "#cbd5f5",
            marginBottom: 20,
          }}
        >
          Sign in to access your Guild characters and quests.
        </p>

        <form onSubmit={handleSubmit}>
          <label
            style={{
              fontSize: 13,
              marginBottom: 6,
              display: "block",
            }}
          >
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginBottom: 12,
              borderRadius: 6,
              border: "1px solid #4b5563",
              background: "#020617",
              color: "#f9fafb",
            }}
          />

          <label
            style={{
              fontSize: 13,
              marginBottom: 6,
              display: "block",
            }}
          >
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              marginBottom: 16,
              borderRadius: 6,
              border: "1px solid #4b5563",
              background: "#020617",
              color: "#f9fafb",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 10,
              borderRadius: 8,
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              background:
                "linear-gradient(90deg, #22c55e, #14b8a6, #0ea5e9)",
              color: "#020617",
            }}
          >
            Enter the Guild
          </button>
        </form>

        {status && (
          <p
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "#e5e7eb",
            }}
          >
            {status}
          </p>
        )}
      </div>
    </main>
  );
}
