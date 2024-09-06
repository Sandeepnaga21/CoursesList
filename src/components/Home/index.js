import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar'
import CourseItemDetailsRoute from '../CourseItemDetailsRoute'
import FailureView from '../FailureView'
import EachCourseDetails from '../EachCourseDetails'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {
    coursesList: [],
    isFailure: true,
    isLoading: true,
    eachCourseDetails: {},
  }

  componentDidMount() {
    this.getCoursesList()
  }

  getFormattedData = data => ({
    id: data.course_details.id,
    name: data.course_details.name,
    imageUrl: data.course_details.image_url,
    description: data.course_details.description,
  })

  getEachCouresDetails = data => {
    const {isLoading} = this.state
    return (
      <EachCourseDetails
        name={data.name}
        description={data.description}
        imageUrl={data.imageUrl}
        isLoading={isLoading}
      />
    )
  }

  onClickItem = async id => {
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = this.getFormattedData(data)
    if (updatedData) {
      this.getEachCouresDetails(updatedData)
    }
  }

  getCoursesList = async () => {
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = await data.courses.map(eachCourse => ({
      id: eachCourse.id,
      name: eachCourse.name,
      logoUrl: eachCourse.logo_url,
    }))
    this.setState({
      coursesList: updatedData,
      isFailure: false,
      isLoading: false,
    })
  }

  render() {
    const {coursesList, isFailure, isLoading, eachCourseDetails} = this.state
    console.log(eachCourseDetails)

    return (
      <>
        <NavBar />
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            testid="loader"
          />
        ) : (
          <Link to="/">
            {isFailure ? (
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
            )}
          </Link>
        )}
      </>
    )
  }
}

export default Home
