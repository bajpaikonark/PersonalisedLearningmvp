
// utils/ai.js
// Replace the mockExplain function to call a real AI provider (OpenAI, Claude, Perplexity) when ready.
export async function mockExplain({ question, selected, correct, concept }) {
  // simple deterministic helper matching /api/ai_explain
  if(concept === 'force') {
    return 'Force is a push or pull on an object. Formula: F = m × a. Try an example: pushing a trolley.';
  } else if(concept === 'pressure') {
    return 'Pressure = Force / Area. A smaller area gives higher pressure for same force (nail vs board).';
  } else {
    return 'Try breaking the problem into smaller parts and use examples. Ask me for a step-by-step solution.';
  }
}
