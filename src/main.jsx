// Importing various dependancies to be used later on in the project.
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary';

// If successful - the App page is loaded and if not - the Error Boundary page gets loaded.
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
