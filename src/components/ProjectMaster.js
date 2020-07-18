import React from "react";
import Project from "./Project";

class ProjectMaster extends React.Component {
    state = {
        projects: [
            {
                title: "Password Generator",
                github: "https://github.com/BigMacD-WebDesign/Password_Generator",
                live: "https://bigmacd-webdesign.github.io/Password_Generator/",
                description: "Secure Password Generator"
            },
            {
                title: "Trivia With Friends",
                github: "https://github.com/dazacher/Trivia-With-Friends",
                live: "https://github.com/dazacher/Trivia-With-Friends",
                description: "Group Project Game"
            },
            {
                title: "Password Generator",
                github: "https://github.com/BigMacD-WebDesign/Password_Generator",
                live: "https://bigmacd-webdesign.github.io/Password_Generator/",
                description: "Secure Password Generator"
            }
        ]
    }

    render () {
        return (
            <div id="project">
                {this.state.projects.map((project, key) => (
                    <Project 
                        title={project.title}
                        github={project.github}
                        live={project.live}
                        description={project.description} 
                        key={key} />
                ))}
            </div>
        )
    }
}

export default ProjectMaster;