"use client";

import { useState } from "react";

export default function Editor() {
  const [content, setContent] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Documentation</h1>

      <textarea
        className="w-full h-96 border rounded-lg p-6 text-sm resize-none focus:outline-none"
        placeholder="Start writing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
