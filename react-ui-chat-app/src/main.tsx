import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //  disable strict mode for prevent useEffect loading twice
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
