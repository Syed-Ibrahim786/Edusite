import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({showVideo, setShowVideo}) => {
    // const player = useRef(null)
    // function closePlayer(e){
    //     if(e.target === player.current){
    //         setShowVideo(false)
    //     }
    // }
    
  return (
    <div className={`video-player ${showVideo?'':'hide'}`}  onClick={()=>{setShowVideo(false)}}>
      <video src={video} muted autoPlay='true' controls onClick={(e)=>{ 
        e.stopPropagation() }}></video>
    </div>
  )
}

export default VideoPlayer
