import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CHAI from './chai.jsx'

const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CHAI />
  </StrictMode>,
)

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )