import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import gameServerMiddleware from './middlewares/GameServerMiddleware'
import connectionMiddleware from './middlewares/ConnectionMiddleware'
import reducer from './reducers/index'
import App from './containers/App'

import { connect as connectWebSocket } from './WebSocket'

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  reducer,
  composeStoreEnhancers(
    applyMiddleware(
      thunk,
      gameServerMiddleware,
      connectionMiddleware
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
