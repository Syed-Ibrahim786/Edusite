import React, { Suspense, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/videoPlayer'





const App = () => {
   const [showVideo, setShowVideo] = useState(false)
  return (
    <>
    <Navbar />
    <Hero/>
    <div className="contain">
      <Title subTitle='our program' title='What We Offer'/>
      
      <Programs/>
    
      <About setShowVideo={setShowVideo}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Gallery/>
      <Title subTitle='testimonials' title='What Students Say'/>
      <Testimonials/>
      <Title subTitle='contact us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <VideoPlayer showVideo={showVideo} setShowVideo={setShowVideo}/>
    
    </>
  )
}

export default App
