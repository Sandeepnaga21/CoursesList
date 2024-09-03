import './index.css'
import {Component} from 'react'
import CourseItemDetailsRoute from '../CourseItemDetailsRoute'
import FailureView from '../FailureView'

class Home extends Component {
  state = {coursesList: [], isFailure: true}

  componentDidMount() {
    console.log('method called')
    this.getCoursesList()
  }

  onClickItem = id => {
    const {coursesList} = this.state
    const course = coursesList.filter(eachCourse => eachCourse.id === id)
    return course
  }

  getCoursesList = async () => {
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = response.json()
    const updatedData = data.courses.map(eachCourse => ({
      id: eachCourse.id,
      name: eachCourse.name,
      logoUrl: eachCourse.logo_url,
    }))
    this.setState({coursesList: updatedData, isFailure: false})
  }

  render() {
    const {coursesList, isFailure} = this.state

    return isFailure ? (
      <FailureView />
    ) : (
      <div className="course-container">
        <h1 className="heading">Courses</h1>
        <ul>
          {coursesList.map(eachOne => (
            <CourseItemDetailsRoute
              courseDetails={eachOne}
              key={eachOne.id}
              onClickItem={this.onClickItem}
              isFailure={isFailure}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
