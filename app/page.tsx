"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [duckCount, setDuckCount] = useState(0);
  const [refCode, setRefCode] = useState("");

  useEffect(() => {
    setDuckCount(prev => prev + 1);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setRefCode(params.get("ref") || "");
  }, []);

  return (
    <main style={{ textAlign: "center", padding: 20 }}>
      <h1 style={{ fontSize: 36 }}>🦆 Claim Your DUCK</h1>
      <img src="/duck.png" alt="Duck" width={200} style={{ margin: "20px auto" }} />
      <p>You have mined <strong>{duckCount}</strong> DUCK!</p>

      <button onClick={() => setDuckCount(0)}>
        🪙 Claim DUCK
      </button>

      <div style={{ marginTop: 20 }}>
        <p>Referral Code: <b>{refCode || "None"}</b></p>
        {refCode && <p>You're referred by: <b>{refCode}</b></p>}
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>🏆 Leaderboard</h2>
        <ol>
          <li>0xAAA… – 150 DUCK</li>
          <li>0xBBB… – 120 DUCK</li>
          <li>0xCCC… – 90 DUCK</li>
        </ol>
      </div>
    </main>
  );
}
