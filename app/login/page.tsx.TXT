"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      setMessage("Error sending login email.");
      setLoading(false);
      return;
    }

    setMessage("Magic link sent! Check your email.");
    setLoading(false);
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "40px",
        maxWidth: 400,
        margin: "0 auto",
      }}
    >
      <h1>Login to Adventurer's Guild</h1>

      <form onSubmit={handleLogin} style={{ marginTop: 20 }}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 12,
            border: "1px solid #ccc",
            borderRadius: 6,
