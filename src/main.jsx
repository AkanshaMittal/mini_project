import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToggleSwitch } from './ToggleSwitch.jsx'
import { ParentComponent } from './ParentComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ToggleSwitch /> */}
    <ParentComponent/>
  </StrictMode>,
)
