import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    //just using image as block doesnt work that images dont fit in 
    // 90% screen size it goes beyond  that limit but 
    // placing that imgf inside a div controls sizing
    <div className="programs">
        <div className="program"> 
            <img src={program_1} loading='lazy' alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graduation degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} loading='lazy' alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Master degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} loading='lazy' alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Post degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
