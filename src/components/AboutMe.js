import React from "react";

function AboutMe() {
    return (
        <>
            <main className="container" id="AboutMe">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <img src="assets/images/IMG_2865.JPG" alt="Profile" className="img-thumbnail img-fluid" height="300px" width="300px" />
                    </div>
                    <div className="col-lg-9 text-center">
                        <p>I am a Full Stack Web Developer with an intense passion for code and problem solving. Skilled in HTML, HTML5,
                        CSS, CSS3, JavaScript, jQuery, Bootstrap
                        React, Node, Express, MySQL, MongoDB, Handlebars. Coding fills me with great satisfaction. I am eager to make
                        this into my life long career choice. In case you are wondering why I call myself BigMac,
                        BigMac is a nic-name that I had when I played
                        high school football and it has traveled with me ever since.</p>
                        <p>"The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice"
                        -Brian Herbert.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" id="Nic">
                        <h5>Contact me. I look forward to working with you.</h5>
                        <a href="mailto:scottmacd88@yahoo.com" className="left-margin"><i className="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/scott-macdonald-b7b741a5/" target="_blank" className="left-margin"><i
                            className="fab fa-linkedin fa-3x"></i></a>
                        <a href="https://github.com/BigMacD-WebDesign" target="_blank" className="left-margin"><i className="fab fa-github-square fa-3x"></i></a>
                        <a href="./assets/Resume/Resume.pdf" target="_blank" className="left-margin"><i className="fas fa-file fa-3x"></i></a>
                    </div>
                </div>
            </main>
        </>
    )
};

export default AboutMe;