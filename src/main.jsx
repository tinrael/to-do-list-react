import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const TASKS = [
  { id: "task-0", name: "Eat", checked: true },
  { id: "task-1", name: "Sleep", checked: false },
  { id: "task-2", name: "Repeat", checked: false },
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={TASKS} />
  </StrictMode>,
)
