
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import { sampleChapter } from '../../data/sample_chapter';
import Flashcard from '../../components/Flashcard';
export default function Chapter() {
  return (
    <div className="container">
      <div className="layout">
        <Sidebar />
        <main style={{flex:1}}>
          <div className="card">
            <h2>{sampleChapter.chapter} - Class {sampleChapter.class}</h2>
            <h3>Gist</h3>
            <p>{sampleChapter.summary}</p>
            <h3 style={{marginTop:12}}>Flashcards</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
              {sampleChapter.flashcards.map((f,i)=>(
                <Flashcard key={i} front={f.front} back={f.back} />
              ))}
            </div>
            <div style={{marginTop:16}}>
              <Link href="/quiz/force-and-pressure"><a className="btn">Take Quiz</a></Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
