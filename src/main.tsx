import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { Provider } from 'react-redux'
import Store from './store/Store.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <BrowserRouter basename='/Bot'>
      <App />
    </BrowserRouter>
  </Provider>
)
