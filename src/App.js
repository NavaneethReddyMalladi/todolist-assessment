import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SimpleTodos from './components/SimpleTodos'

import './App.css'
import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={SimpleTodos} />
  </Switch>
)
export default App
