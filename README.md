
# AI Learning App MVP (v2)

This is a starter Next.js app for an AI-powered personalized learning MVP targeting students up to Class 10.

## Features
- Static sample chapter (Class 8 - Science - Force & Pressure)
- Chapter gist, flashcards, and quiz pages
- Sidebar menu
- Mock AI feedback API (local) that returns helpful explanations for incorrect answers
- Ready to deploy on Vercel or run locally

## Quick Start (local)
1. Install dependencies:
   ```
   npm install
   ```
2. Run development server:
   ```
   npm run dev
   ```
3. Open http://localhost:3000

## Notes
- The project uses a mocked AI endpoint (`/api/ai_explain`) that generates simple explanations.
- To connect a real AI (OpenAI / Perplexity / Claude), replace `utils/ai.js` with real API calls and set environment variables.
