import './Home.css'

export default function Home() {
  return (
    <div className="hero-wrapper" >
      <div className="hero-main hero-card">
        <img src="portrait_transparent.webp" alt="portrait" />
        <div className='dummy-spacing'></div>
        <p>
          My name is<strong> Joan Gonzalez</strong>, I’m a<strong> graphic designer </strong>and<strong> frontend developer</strong>
        </p>
      </div>
      <div className="hero-secondary hero-card">My projects</div>
      <div className="hero-secondary hero-card">My most impactful designs</div>

    </div>
  )
}