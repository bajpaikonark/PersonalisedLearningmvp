
export default function handler(req, res) {
  const body = req.method === 'POST' ? req.body : {};
  // simple mocked logic to create friendly explanation.
  const question = body.question || 'this concept';
  const concept = body.concept || null;
  let explanation = `Here's a simple explanation for "${question}": `;
  if(concept && concept === 'force'){
    explanation += 'Force is a push or pull on an object. Remember F = m × a. Try thinking of pushing a swing — the harder you push (more force), the faster it moves.';
  } else if(concept && concept === 'pressure'){
    explanation += 'Pressure is force divided by area (P = F / A). If you press with the same force on a small nail or a broad board, the nail pierces because pressure is higher.';
  } else {
    explanation += 'Break it into smaller steps: what is given, what changes, and how formula or idea applies. Try an example and ask me to check your answer.';
  }
  res.status(200).json({ explanation });
}
