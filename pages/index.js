
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
export default function Home() {
  return (
    <div className="container">
      <div className="layout">
        <Sidebar />
        <main style={{flex:1}}>
          <div className="card">
            <h1>Welcome to AI Learning App (MVP)</h1>
            <p>Pick a class, subject and chapter to begin.</p>
            <div style={{marginTop:20}}>
              <Link href="/chapter/force-and-pressure">
                <a className="btn">Start: Class 8 - Force & Pressure</a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
