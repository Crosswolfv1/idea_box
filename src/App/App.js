import { useState } from 'react'
import Ideas from '../Idea/Ideas'
import Form from '../Form/Form'
import './App.css'

function App() {
  const [ideas, setIdeas] = useState([])
  
  function addIdea(newIdea) {
    setIdeas([...ideas, newIdea])
  }

  function deleteIdea(id){
    console.log(id);
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea}/>
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App