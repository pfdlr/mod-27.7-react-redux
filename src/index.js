import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './Reducer';
import { addComment } from "./Actions";
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
