import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './pages/Appamrit'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuestionBank from './pages/QuestionBank'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: `/bank`,
    element: <QuestionBank />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
