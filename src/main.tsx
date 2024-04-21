import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
import {CV} from "./CV.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CV/>
  </React.StrictMode>,
)
