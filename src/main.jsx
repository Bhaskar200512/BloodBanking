import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import Home2 from './components/Home2.jsx'
import { BrowserRouter } from 'react-router-dom'
import Layout1 from './components/Layout1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Layout1/>
    </BrowserRouter>
  </StrictMode>,
)
