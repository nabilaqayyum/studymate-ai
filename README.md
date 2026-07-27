# 📚 StudyMate AI

<p align="center">
  <b>AI-Powered Study Notes Analyzer built with Next.js and Google Gemini AI</b>
</p>

<p align="center">
  Study smarter by transforming long study notes into easy-to-understand summaries, explanations, keywords, and quiz questions.
</p>

---

# 🌐 Live Demo

**Live Application:**  
https://studymate-ai-roan.vercel.app

---

# 📖 About the Project

StudyMate AI is an AI-powered educational web application developed to help students quickly understand and revise their study material.

Students often spend a significant amount of time reading lengthy notes before exams. StudyMate AI reduces that effort by automatically analyzing study notes and generating a concise summary, a beginner-friendly explanation, important keywords, and quiz questions for self-assessment.

This application is designed for:
- Students preparing for exams
- Self-learners
- Teachers creating revision material
- Anyone who wants to understand complex study notes quickly

---

# 🎯 Problem It Solves

Many students struggle to:
- Read long notes efficiently
- Identify the most important concepts
- Revise quickly before exams
- Test their understanding

StudyMate AI solves these problems by using Artificial Intelligence to instantly transform raw study notes into structured learning material, making studying faster and more effective.

---

# ✨ Features

- 🤖 AI-powered study notes analysis
- 📖 Automatic summary generation
- 💡 Easy-to-understand explanations
- 🔑 Extraction of important keywords
- ❓ Automatic quiz question generation
- 📋 Copy generated results
- 🗑️ Clear notes with one click
- ⚡ Fast AI responses
- 🌐 Fully deployed on Vercel
- 📱 Responsive user interface

---

# 🤖 AI Feature

StudyMate AI uses **Google Gemini 3.5 Flash** to analyze the user's study notes.

When the user submits notes, the AI:

- Reads and understands the content
- Generates a concise summary
- Explains the topic in simple language
- Extracts important keywords
- Creates quiz questions for revision

### AI Prompt Used

The application sends a structured prompt similar to the following:

```
Analyze the following study notes.

Generate your response using Markdown.

Include:

1. Summary
2. Easy Explanation
3. Important Keywords
4. Quiz Questions

Keep the response clear, concise, and student-friendly.

Study Notes:
<user input>
```

This prompt ensures that the AI produces consistent, organized, and easy-to-read educational content.

---

# 🛠 Technologies, Services & AI Model Used

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

## AI

- Google Gemini API
- Gemini 3.5 Flash
- Google GenAI SDK

## Libraries

- React Markdown

## Deployment & Version Control

- GitHub
- Vercel

---

# 📂 Project Structure

```
studymate-ai
│
├── app
│   ├── api
│   │   └── chat
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public
├── package.json
├── README.md
└── .env.local
```

---

# 📸 Screenshots

## 1. Home Page

![Home Page](screenshots/homepage.png)

---

## 2. Entering Study Notes

![Notes Input](screenshots/input.png)

---

## 3. AI Generated Results

![AI Output](screenshots/output.png)

---

# ⚙️ How to Run the Project

## Clone the repository

```bash
git clone https://github.com/nabilaqayyum/studymate-ai.git
```

## Go into the project

```bash
cd studymate-ai
```

## Install dependencies

```bash
npm install
```

## Create a `.env.local` file

```env
GOOGLE_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY
```

## Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 🚀 Deployment

This application is deployed using **Vercel**.

Deployment steps:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the `GOOGLE_API_KEY` environment variable.
4. Deploy the project.

---

# 🔮 Future Improvements

- 🌙 Dark Mode
- 📄 PDF Upload
- 📥 Export AI results as PDF
- 💬 Chat-style interface
- 📚 History of previous analyses
- 🎤 Voice input
- 🌍 Multi-language support

---

# 👩‍💻 Author

**Nabila Qayyum**

GitHub: https://github.com/nabilaqayyum

LinkedIn: https://linkedin.com/in/nabila-qayyum-384066178

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Acknowledgements

This project was built using **Next.js**, **Google Gemini AI**, **React**, **TypeScript**, and **Vercel** to demonstrate how Artificial Intelligence can improve students' learning experience through automated study note analysis.