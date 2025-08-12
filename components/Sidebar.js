
import Link from 'next/link';
export default function Sidebar(){
  return (
    <aside className="sidebar">
      <h3 style={{marginTop:0}}>AI Learn</h3>
      <nav style={{display:'flex', flexDirection:'column', gap:8, marginTop:12}}>
        <Link href="/"><a>🏠 Home</a></Link>
        <Link href="/chapter/force-and-pressure"><a>📖 Learn</a></Link>
        <Link href="/"><a>💡 Flashcards</a></Link>
        <Link href="/quiz/force-and-pressure"><a>📝 Quizzes</a></Link>
        <Link href="/chat"><a>🤖 AI Tutor</a></Link>
        <Link href="/"><a>📈 Progress</a></Link>
        <Link href="/"><a>⚙️ Settings</a></Link>
      </nav>
    </aside>
  )
}
