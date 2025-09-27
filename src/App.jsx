// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'
import { BoardProvider } from './BoardContext'


function App() {
  

  return (
   <BoardProvider>
    <Board/>
   </BoardProvider>
  )
}

export default App
