import './Testimonials.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useEffect, useRef, useState } from 'react'

const Testimonials = () => {
    const slide = useRef()
    const translatex = useRef(0);
    function slideForward() {
    if (translatex.current > -75) {
        translatex.current -= 25;
        slide.current.style.transform = `translateX(${translatex.current}%)`;
    }
}

function slideBackward() {
    if (translatex.current < 0) {
        translatex.current += 25;
        slide.current.style.transform = `translateX(${translatex.current}%)`;
    }
}


    //the beelow commented also work but using useref make it easy and clean also scalable with some changes
    // const [slide, setSlide] = useState("")
    // const numberOfSliding = useRef(0)
    // let numberOfList = 4


    // useEffect(() =>{
        
    //     const slider = document.querySelector(".sliderList")
    //     if (!slider) return;
    //     if(slide === "right" && numberOfSliding.current < numberOfList / 2 - 1){
            
    //         slider.style.transform = `translateX(calc(-100% /(${numberOfList}/2)))`
    //         numberOfSliding.current += 1
    //         }else if(slide === "left" && numberOfSliding.current > 0){
    //             slider.style.transform = `translateX(0)`
    //             numberOfSliding.current -= 1
    //         }
    //         setSlide("");
    // },[slide])

  return (
    <div className="testimonials">
      <img className="back_btn" onClick={ slideBackward } src={back_btn} alt="" />
      <img className="next_btn" onClick={ slideForward } src={next_btn} alt="" />
      <div className="slider">
        <ul ref ={slide}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img loading='lazy' src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>
                        Choosing to pursue my degree at Edusity was one of the best decision i've ever made. the supportive community, state-of -the-art facilities, and commitemnet to academic excellence have truly exceeded my expectation
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} loading='lazy' alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>

                    </div>
                    </div>
                    
                    <p>
                        Choosing to pursue my degree at Edusity was one of the best decision i've ever made. the supportive community, state-of -the-art facilities, and commitemnet to academic excellence have truly exceeded my expectation
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} loading='lazy' alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>

                    </div>
                    </div>
                    
                    <p>
                        Choosing to pursue my degree at Edusity was one of the best decision i've ever made. the supportive community, state-of -the-art facilities, and commitemnet to academic excellence have truly exceeded my expectation
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} loading='lazy' alt="" />
                    <div>
                        <h3>William Jackson</h3>
                        <span>Edusity, USA</span>

                    </div>
                    </div>
                    
                    <p>
                        Choosing to pursue my degree at Edusity was one of the best decision i've ever made. the supportive community, state-of -the-art facilities, and commitemnet to academic excellence have truly exceeded my expectation
                    </p>
                </div>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
