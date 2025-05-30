import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/slices/Store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
   <Provider store={store}>
      <StrictMode>
    <App />
    <ToastContainer/>
    <Toaster/>
  </StrictMode>,
  </Provider>
 </BrowserRouter>
)
