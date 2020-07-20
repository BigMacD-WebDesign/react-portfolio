import React from "react";

function Project(props) {
    return (
        <>
            <div className="card-body">
                <img className="card-img-top">{props.image}</img>
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.description}</p>

                <button className="btn btn-primary">
                    <a className="card-link text-white" href={props.github}>GitHub</a>
                </button>
                <button className="btn btn-primary">
                    <a className="card-link text-white" href={props.live}>Live</a>
                </button>
            </div>
        </>
    )
};

export default Project;