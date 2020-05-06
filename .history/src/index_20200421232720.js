import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './node_modules/configureStore'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> 
      { /* your usual react-router v4/v5 routing */ }
        
      <Layout/>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);
