import React from "react";

function Project(props) {
    return (
        <>
            <div className="card-body">
                <img className="card-img-top" alt={props.title} width="400" height="200" src={props.image}></img>
                <h6 className="card-title text-center">{props.title}</h6>
                <p className="card-text">{props.description}</p>

                <button className="btn btn-primary border">
                    <a className="card-link text-white" href={props.github}>GitHub</a>
                </button>
                <button className="btn btn-primary border">
                    <a className="card-link text-white" href={props.live}>Live</a>
                </button>
            </div>
        </>
    )
};

export default Project;