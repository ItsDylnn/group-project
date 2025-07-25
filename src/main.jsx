import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookingSystem from './BookingSystem.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookingSystem />
  </StrictMode>,
)
