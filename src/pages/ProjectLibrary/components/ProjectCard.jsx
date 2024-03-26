import styles from './../components/ProjectCards.module.css'

export default function ProjectCard({levelBtnChange, pagesBtnChange}) {

  // DUMMY DATA simulating the fetch data that will be passed to the MAP function
    const SDProjectLibraryData = [
        {
          title: "Introduction",
          level: "beginner",
          activity_type: "Animation",
          src: "/images/projects/Project01.png",
        },
        {
          title: "My Birthday",
          level: "beginner",
          activity_type: "Augmented Reality",
          src: "/images/projects/Project02.png",
        },
        {
          title: "Block Challenge",
          level: "Beginner",
          activity_type: "Animation",
          src: "/images/projects/Project03.png",
        },
        {
          title: "Build a Bandy",
          level: "Beginner",
          activity_type: "Augmented Reality",
          src: "/images/projects/Project04.png",
        },
        {
          title: "The Bear and the Monkey",
          level: "Beginner",
          activity_type: "Animation",
          src: "/images/projects/Project05.png",
        },
        {
          title: "Debugging",
          level: "Beginner",
          activity_type: "Game",
          src: "/images/projects/Project06.png",
        },
        {
          title: "I am Here!",
          level: "Intermediate",
          activity_type: "Animation",
          src: "/images/projects/Project07.png",
        },
        {
          title: "Funny Faces",
          level: "Intermediate",
          activity_type: "Game",
          src: "/images/projects/Project08.png",
        },
        {
          title: "Activity: Finding Common Grounds",
          level: "Beginner",
          activity_type: "Chatbot",
          src: "/images/projects/Project09.png",
        },
        {
          title: "It Tickles!",
          level: "Advanced",
          activity_type: "Chatbot",
          src: "/images/projects/Project10.png",
        },
        {
          title: "Penguin in a Desert",
          level: "Beginner",
          activity_type: "Animation",
          src: "/images/projects/Project11.png",
        },
        {
          title: "Time Travel",
          level: "Beginner",
          activity_type: "Game",
          src: "/images/projects/Project12.png",
        },
        {
          title: "Animated Birthday Card",
          level: "Intermediate",
          activity_type: "Animation",
          src: "/images/projects/Project13.png",
        },
        {
          title: "The Lion and the Mouse Part 1",
          level: "Advanced",
          activity_type: "Animation",
          src: "/images/projects/Project14.png",
        },
        {
          title: "The Lion and the Mouse Part 2",
          level: "Beginner",
          activity_type: "Animation",
          src: "/images/projects/Project15.png",
        },
        
      ];
      
// Testing the LEVEL FILTER  - NOT WORKING YET

// const resultFilter = SDProjectLibraryData.filter({levelBtnChange}.levelBtnChange.name.toLowerCase())
const resultFilter = SDProjectLibraryData.slice(0, pagesBtnChange.name)



  return (
    <>
    <div className={styles.cardContainer}>
        {/* {SDProjectLibraryData.map((project, index) => { */}
        {resultFilter.map((project, index) => {
            //  if (resultFilter[index].level.toLowerCase() === {levelBtnChange}.levelBtnChange.name.toLowerCase()) {
            return (
                <>
                    <div key={index} className={styles.card} > 
                        <img src={project.src} alt="project" width="90%"/>
                        <h3>{project.title}</h3>
                        <div className={styles.cardInfo}>
                            <div className={styles.lvl}>{project.level}</div>
                            <div>{project.activity_type}</div>
                        </div>
                    </div>
                </>
            )
          // } 
        })}
    </div>
    </>
  )
}
