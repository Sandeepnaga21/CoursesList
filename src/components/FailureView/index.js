import './index.css'
import NavBar from '../NavBar'

const FailureView = () => (
  <>
    <NavBar />
    <div className="failure">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        className="img"
        alt="failure view"
      />
      <h1 className="heading">Oops! Something Went Wrong</h1>
      <p className="para">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" className="r-butn">
        Retry
      </button>
    </div>
  </>
)

export default FailureView
