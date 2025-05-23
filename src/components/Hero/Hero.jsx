import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>We Ensure better education for the better world</h1>
        <p>Our cutting edge education to Empower the students with Knowledge, Skills and Experience needed to excel in dynamic field of education</p>
        <button className="btn">Explore more <img  src={arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero
