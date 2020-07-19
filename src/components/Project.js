import React from "react";

function Project(props) {
    return (
        <>
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.description}</p>

                <button className="btn btn-success">
                    <a className="card-link" href={props.github}></a>
                </button>
                <button className="btn btn-success">
                    <a className="card-link" href={props.live}></a>
                </button>
            </div>
        </>
    )
};

export default Project;