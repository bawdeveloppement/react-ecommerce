//#region Base dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
//#endregion
//#region Redux
import { Provider as ReduxProvider } from 'react-redux'
import RootStore from './redux/Root.store';
//#endregion
//#region Components
import App from './App';
//#endregion
//#region Styles & StylesRules
import './index.css';
import './assets/scss/_mixins.scss'
import './assets/scss/_breakpoints.scss'
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
