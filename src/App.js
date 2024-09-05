import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetailsRoute from './components/CourseItemDetailsRoute'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetailsRoute} />
    <Route component={NotFound} />
  </Switch>
)

export default App
