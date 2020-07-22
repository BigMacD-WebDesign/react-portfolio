import React from "react";
import Project from "./Project";

class ProjectMaster extends React.Component {
    state = {
        projects: [
            {
                image: "/assets/images/gaming(1).PNG",
                title: "Trivia With Friends",
                github: "https://github.com/dazacher/Trivia-With-Friends",
                live: "https://github.com/dazacher/Trivia-With-Friends",
                description: "A fun trivia style game. Keep track of high score and try to beat it. Utilizes trivia API, HTML, CSS, Bootstrap, jQuery."
            },
            {
                image: "assets/images/React_Directory.PNG",
                title: "React Employee Directory",
                github: "https://github.com/BigMacD-WebDesign/React_Employee_Directory",
                live: "https://bigmacd-webdesign.github.io/React_Employee_Directory/",
                description: "React Employee directory that can sort in alphabetical order on names, e-mail and sort via phone numbers. Utilizes ReactJS."
            },
            {
                image: "assets/images/Cost_Tracker.PNG",
                title: "My Cost Tracker",
                github: "https://github.com/olegaposh/my_cost_tracker",
                live: "https://my-cost-tracker.herokuapp.com/login",
                description: "Group Project Budget Tracker. NodeJS, Express, Handlebars, SQL, passport.js"
            },
            {
                image: "assets/images/Day_Planner.PNG",
                title: "Day Planner",
                github: "https://github.com/BigMacD-WebDesign/Day_Planner/",
                live: "https://bigmacd-webdesign.github.io/Day_Planner/",
                description: "Life get's busy. Easy to do list to save tasks that need to take place during the day. Utilizes HTML, CSS, jQuery and Local Storage"
            },
            {
                image: "assets/images/PWA-Budget.PNG",
                title: "Transaction Tracking",
                github: "https://github.com/BigMacD-WebDesign/PWA_Budget_Tracker",
                live: "https://pwa-finance-tracker.herokuapp.com/",
                description: "Electronic Transaction book to take on the go. PWA, MongoDB. Offline functionality."
            },
            {
                image: "assets/images/Burger_App.PNG",
                title: "MySQL Burger App",
                github: "https://github.com/BigMacD-WebDesign/Burger_App",
                live: "https://burgers-app-mvc.herokuapp.com/",
                description: "Burger Devour App. Utilizes Handlebars, Sequelize, jQuery, CSS, MySql, Node.JS."
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="project">
                        {this.state.projects.map((project, key) => (
                            <Project
                                image={project.image}
                                title={project.title}
                                github={project.github}
                                live={project.live}
                                description={project.description}
                                key={key} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectMaster;