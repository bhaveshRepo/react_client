import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './pages/ErrorPage'
import QuestionBank from './pages/QuestionBank'
import CreateQuestion from './pages/CreateQuestion'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateQuestion />,
    errorElement: <ErrorPage />
  },
  {
    path: `/bank/:id`,
    element: <QuestionBank />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
