import React from 'react'
import ReactDOM from 'react-dom/client'
import PoemGenerator from "./components/PoemGenerator"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <h1>Poem Generator</h1>
     <PoemGenerator />
  </React.StrictMode>,
)