import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import gameServerMiddleware from './middlewares/GameServerMiddleware';
import connectionMiddleware from './middlewares/ConnectionMiddleware';
import reducer from './reducers/index';
import App from './containers/App';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;

const history = createBrowserHistory();

let store = createStore(
    connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
    composeStoreEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
            gameServerMiddleware,
            connectionMiddleware,
        ),
    ),
);

ReactDOM.render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    document.getElementById('root'),
);
