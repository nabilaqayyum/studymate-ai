"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [notes, setNotes] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeNotes() {
    if (!notes.trim()) {
      alert("Please paste some study notes.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data.result);
    } catch (error: any) {
      setResult(error.message);
    }

    setLoading(false);
  }

  function clearAll() {
    setNotes("");
    setResult("");
  }

  function copyResults() {
    navigator.clipboard.writeText(result);
    alert("Results copied!");
  }

  return (
    <main className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-blue-700">
            📚 StudyMate AI
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Understand your study notes instantly using AI.
          </p>
        </div>

        {/* Input Card */}

        <div className="bg-white rounded-2xl shadow-xl p-6">

          <label className="font-semibold text-gray-700">
            Paste your study notes
          </label>

          <textarea
            rows={10}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Paste your notes here..."
            className="w-full mt-3 border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <div className="flex gap-4 mt-5">

            <button
              onClick={analyzeNotes}
              disabled={loading}
              className="flex-1 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
            >
              {loading ? "Analyzing..." : "Analyze Notes"}
            </button>

            <button
              onClick={clearAll}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 rounded-xl"
            >
              Clear
            </button>

          </div>

        </div>

        {/* Output */}

        <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-2xl font-bold">
              🤖 AI Results
            </h2>

            {result && (

              <button
                onClick={copyResults}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                📋 Copy
              </button>

            )}

          </div>

          {loading ? (

            <div className="text-center py-10">

              <div className="text-blue-600 text-xl font-semibold">
                ⏳ AI is analyzing your notes...
              </div>

            </div>

          ) : result ? (

            <div className="prose prose-lg max-w-none">

              <ReactMarkdown>
                {result}
              </ReactMarkdown>

            </div>

          ) : (

            <div className="text-gray-500 text-center py-8">

              AI analysis will appear here.

            </div>

          )}

        </div>

      </div>
    </main>
  );
}