import "./sidebar.css"

const Sidebar= () => {
    return (
        <div className="logocontainer">
            <div className="sidebar">
                <img src="" alt="logo" />
                <h2>Learning</h2>
            </div>
            <div className="Burgercontainer">
                <div className="burgerTrigger"></div>
                <div className="burgerMenu"></div>
                
            </div>
            <div className="profileContainer">
                <img src="" alt="profile pic" />
            </div>
            <div className="profileContents">
                <p className="name">Hello teacher</p>
                <p>Email</p>
            </div>
            <div className="contentsContainer">
                <ul>
                    <img src="" alt="ProgressBar" /><li><a href="/">ProgressTracker</a></li>
                    <li><a href="/">Student Profiles</a></li>
                    <li><a href="/">ProgressTracker</a></li>
                    <li><a href="/">ProgressTracker</a></li>
                    <li><a href="/">ProgressTracker</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar