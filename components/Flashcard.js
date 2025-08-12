
import { useState } from 'react';
export default function Flashcard({ front, back }){
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flashcard" onClick={()=>setFlipped(!flipped)}>
      {flipped ? back : front}
    </div>
  )
}
