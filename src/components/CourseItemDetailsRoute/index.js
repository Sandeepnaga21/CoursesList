import './index.css'
import {Link} from 'react-router-dom'
import FailureView from '../FailureView'

const CourseItemDetailsRoute = props => {
  const {courseDetails, onClickItem, isFailure} = props
  const {id, name, logoUrl} = courseDetails

  const onClickCourseItem = () => {
    onClickItem(id)
  }

  const showFailureView = isFailure

  return (
    <>
      <Link to="/courses/:id">
        {showFailureView ? (
          <FailureView />
        ) : (
          <div className="container">
            <button type="button" onClick={onClickCourseItem}>
              <li className="list" key={id}>
                <img src={logoUrl} alt="" className="img" />
                <h1 className="sub-head">{name}</h1>
              </li>
            </button>
          </div>
        )}
      </Link>
    </>
  )
}

export default CourseItemDetailsRoute
