import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DarkModeProvider } from './context/darkMode.jsx'
import { SelectedContext, SelectedProvider } from './context/selected'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DarkModeProvider>
)
