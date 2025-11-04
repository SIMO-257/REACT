import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './CSS/index3.css';
// import './CSS/index.css';
// import './CSS/index2.css';


import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
