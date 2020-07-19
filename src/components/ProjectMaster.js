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
                description: "Group Project Trivia Game"
            },
            {
                title: "React Employee Directory",
                github: "https://github.com/BigMacD-WebDesign/React_Employee_Directory",
                live: "https://bigmacd-webdesign.github.io/React_Employee_Directory/",
                description: "React Employee directory that can sort in alphabetical order on names, e-mail and sort via phone numbers."
            },
            {
                title: "React Employee Directory",
                github: "https://github.com/olegaposh/my_cost_tracker",
                live: "https://my-cost-tracker.herokuapp.com/login",
                description: "Group Project Budget Tracker."
            },
        ]
    }

    render() {
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