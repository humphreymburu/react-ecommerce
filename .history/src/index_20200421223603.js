import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './node_modules/configureStore'

const store = configureStore(/* provide initial state if any */)

ReactDOM.render(
<Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> 
      { /* your usual react-router v4/v5 routing */
      <Router><nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav></Router>
      
      
      }
        
        <App />
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);

