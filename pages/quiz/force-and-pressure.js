
import Sidebar from '../../components/Sidebar';
import { sampleChapter } from '../../data/sample_chapter';
import { useState } from 'react';
export default function QuizPage() {
  const questions = sampleChapter.quiz;
  const [answers, setAnswers] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  async function submitAnswer(qIndex, selected) {
    const q = questions[qIndex];
    const correct = selected === q.answer;
    setAnswers(prev=>({ ...prev, [qIndex]: { selected, correct }}));
    if(!correct){
      // ask mock AI feedback
      const res = await fetch('/api/ai_explain', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ question: q.question, selected, correct:false, concept: q.concept })
      });
      const data = await res.json();
      setFeedbacks(prev=>({ ...prev, [qIndex]: data }));
    }
  }

  return (
    <div className="container">
      <div className="layout">
        <Sidebar />
        <main style={{flex:1}}>
          <div className="card">
            <h2>Quiz: {sampleChapter.chapter}</h2>
            {questions.map((q, idx)=>(
              <div key={idx} style={{marginBottom:16}}>
                <div style={{fontWeight:700}}>{idx+1}. {q.question}</div>
                <div style={{display:'flex', gap:8, marginTop:8}}>
                  {q.options.map((opt,i)=>(
                    <button key={i} className="btn" onClick={()=>submitAnswer(idx,opt)}>{opt}</button>
                  ))}
                </div>
                {answers[idx] && (
                  <div style={{marginTop:8}}>
                    {answers[idx].correct ? <span style={{color:'green'}}>Correct ✅</span> : <span style={{color:'red'}}>Incorrect ❌</span>}
                  </div>
                )}
                {feedbacks[idx] && (
                  <div style={{marginTop:8, padding:8, background:'#f1f5f9', borderRadius:6}}>
                    <strong>AI Tutor:</strong>
                    <p style={{margin:0}}>{feedbacks[idx].explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
