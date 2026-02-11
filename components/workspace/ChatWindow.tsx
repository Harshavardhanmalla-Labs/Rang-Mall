"use client";

import { useState } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Team Chat</h1>

      <div className="bg-white border rounded-lg p-6 h-96 overflow-y-auto mb-4">
        {messages.length === 0 && (
          <p className="text-gray-400 text-sm">No messages yet.</p>
        )}

        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            <span className="bg-gray-100 px-3 py-2 rounded-md text-sm">
              {msg}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          className="flex-1 border rounded-md px-4 py-2 text-sm"
          placeholder="Type message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-6 py-2 rounded-md text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
