import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { notes } = await req.json();

    const prompt = `
You are StudyMate AI, an intelligent educational assistant that helps students understand study material quickly and accurately.

Your task is to analyze the study notes provided by the student and produce a well-structured response in VALID MARKDOWN.

Follow these rules carefully:

- Use clear Markdown headings (#).
- Keep the explanation simple and easy to understand.
- Be accurate and educational.
- Do not invent information that is not present in the notes.
- Use bullet points where requested.
- Keep the response organized and visually appealing.

Return your answer EXACTLY in this format:

# 📖 Summary

Write a concise summary in 3–5 sentences.

# 💡 Easy Explanation

Explain the topic as if teaching a beginner or high-school student.

# 🔑 Important Keywords

List exactly 5 keywords.

- Keyword 1
- Keyword 2
- Keyword 3
- Keyword 4
- Keyword 5

# ❓ Quiz Questions

Generate exactly 5 short quiz questions based on the notes.

1. Question 1
2. Question 2
3. Question 3
4. Question 4
5. Question 5

# 🎯 Quick Revision Tips

Write 3 short bullet points that help the student remember the topic quickly.

Study Notes:

${notes}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to analyze notes.",
      },
      {
        status: 500,
      }
    );
  }
}