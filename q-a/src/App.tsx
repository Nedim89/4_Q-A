import './App.css'
import {useState} from 'react'
import data from './data'
import SingleQuestion from './SingleQuestion'

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section>
        {questions.map(question=>{
         return <SingleQuestion key={question.id} {...question}/>
        })}
    </section>
    </main>
    
  )
}

export default App
