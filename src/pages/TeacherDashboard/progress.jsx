import Studentdata from "./Students";
import Studentcard from "./studentcard";

function Students() {
    return (
      <div className="container">
        {Studentdata.map((student, index) => (
          <Studentcard key={index} {...student} />
        ))}
      </div>
    );
  }
  
  export default Students;