import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//#region Redux
import { Provider as ReduxProvider } from 'react-redux'
import RootStore from './redux/Root.store';
//#endregion

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={RootStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
