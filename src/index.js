import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { store } from './components/store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App isLogged={0} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
