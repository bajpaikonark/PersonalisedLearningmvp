
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  async function send() {
    if(!text) return;
    const userMsg = { role: 'user', text };
    setMessages(prev=>[...prev, userMsg]);
    setText('');
    const res = await fetch('/api/ai_explain', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ question: text, chat:true })
    });
    const data = await res.json();
    setMessages(prev=>[...prev, { role:'ai', text: data.explanation }]);
  }
  return (
    <div className="container">
      <div className="layout">
        <Sidebar />
        <main style={{flex:1}}>
          <div className="card">
            <h2>AI Tutor Chat</h2>
            <div style={{minHeight:200, border:'1px solid #e6eefc', padding:12, borderRadius:6}}>
              {messages.map((m,i)=>(<div key={i} style={{marginBottom:8}}><strong>{m.role}:</strong> {m.text}</div>))}
            </div>
            <div style={{display:'flex', gap:8, marginTop:8}}>
              <input value={text} onChange={(e)=>setText(e.target.value)} style={{flex:1, padding:8}} placeholder="Ask your doubt..." />
              <button className="btn" onClick={send}>Send</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
