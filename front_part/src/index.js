import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <Router>
    <MuiThemeProvider >
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </MuiThemeProvider >  
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
