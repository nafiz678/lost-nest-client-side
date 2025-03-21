import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { ThemeProvider } from './provider/theme-provider'
import AuthProvider from './provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import CanvasCursor from './components/Cursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
        <div><Toaster/></div>
        <CanvasCursor></CanvasCursor>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
