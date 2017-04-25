import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import gameServerMiddleware from './middlewares/GameServerMiddleware';
import reducer from './reducers/index';
import App from './containers/App';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeStoreEnhancers(
        applyMiddleware(
            thunk,
            gameServerMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
