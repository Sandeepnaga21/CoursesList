import './index.css'
import {withRouter} from 'react-router-dom'

const NavBar = props => {
  const {history} = props
  const onClickImg = () => {
    history.replace('/')
  }
  return (
    <nav className="nav-bar">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        onClick={onClickImg}
      />
    </nav>
  )
}

export default withRouter(NavBar)
