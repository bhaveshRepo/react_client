import './index.css'
import React from 'react'
import App from './pages/App'
import ReactDOM from 'react-dom/client'
import ErrorPage from './pages/ErrorPage'
import QuestionBank from './pages/QuestionBank'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
