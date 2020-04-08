import React from 'react';
import Home from './pages/Home';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>加载中....</div>

const Login = Loadable({
  loader: () => import('./pages/Login'),
  loading: Loading
})

const Register = Loadable({
  loader: () => import('./pages/Register'),
  loading: Loading
})

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
