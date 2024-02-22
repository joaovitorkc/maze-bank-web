// React
import { useState } from 'react'

// Style
import './App.css'

// Toast
import { Toaster } from 'sonner'

// Router
import AppRoutes from './AppRoutes'

function App() {

  return (
    <>
      <AppRoutes />
      <Toaster richColors visibleToasts="2" position="top-center" />
    </>
  )
}

export default App
