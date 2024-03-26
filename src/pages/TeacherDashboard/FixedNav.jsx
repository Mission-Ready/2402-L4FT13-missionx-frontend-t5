import { Link } from "react-router-dom"
import "./FixedNav.css"
function FixedNav(){
return (
    
        <div className="nav-bar">
          <img src="profile-pic.jpg" alt="Profile" className="profile-pic"/>
          <Link to="/progresstracker">
            <button>Progress Tracker</button>
          </Link>
          <Link to="/studentprofiles">
            <button>Student Profiles</button>
          </Link>
          <button className="nav-button question"></button>
          <button className="nav-button calendar"></button>
          <button className="nav-button qr-code"></button>
          <div className='bottom-buttons'>
            <button className='play'></button>
            <div className='vertical-line'></div>
            <button className='add'></button>
          </div> 
        </div>
)
}
export default FixedNav
