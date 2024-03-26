
import "./studentcards.css"
function studentcard({Name,Projects,Picture}){
    return (
        <div className="Card">
            <img src={Picture} alt = {Name} className="avatar"/>
            <div className="info">
                <h2>{Name}</h2>
                <p>Projects completed: {Projects}</p>
            </div>
        </div>
    )

}



export default studentcard