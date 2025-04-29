import { StrictMode } from 'react'
import { render } from 'react-dom';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/reducers/store.js'


render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
)
