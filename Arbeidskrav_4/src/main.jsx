import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Fjernet nedlastet css, for å ta i bruk egen
// import './index.css'
import './styles/main.scss'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
