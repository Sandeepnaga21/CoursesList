import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetailsRoute from './components/CourseItemDetailsRoute'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetailsRoute} />
    <Route component={NotFound} />
  </Switch>
)

export default App
