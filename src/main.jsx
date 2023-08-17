import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { WeatherApp } from './components/WeatherApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherApp></WeatherApp>
  </React.StrictMode>,
)