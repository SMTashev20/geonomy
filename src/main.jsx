import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import { ErrorBoundary } from './components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
