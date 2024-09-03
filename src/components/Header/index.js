import './index.css'
import {Link} from 'react-router-dom'
import Home from '../Home'
import CourseItemDetailsRoute from '../CourseItemDetailsRoute'
import NavBar from '../NavBar'

const Header = () => (
  <>
    <NavBar />
    <Link to="/">{Home}</Link>
    <Link to="/courses/:id">{CourseItemDetailsRoute}</Link>
  </>
)

export default Header
