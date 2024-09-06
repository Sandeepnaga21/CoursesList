import './index.css'
import Loader from 'react-loader-spinner'
import NavBar from '../NavBar'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const EachCourseDetails = props => {
  const {name, description, imageUrl, isLoading} = props

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
        <div className="c-container">
          <img src={imageUrl} className="c-img" alt={name} />
          <>
            <h1 className="heading">{name}</h1>
            <p className="paragraph">{description}</p>
          </>
        </div>
      )}
    </>
  )
}

export default EachCourseDetails
