import React from "react";

function Project(props) {
    return (
        <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card-body">
                <img className="card-img-top" alt={props.title} src={props.image}></img>
                <h2 className="card-title text-center">{props.title}</h2>
                <p className="card-text">{props.description}</p>

                <button className="btn btn-primary border">
                    <a className="card-link text-white" target="_blank" href={props.github}>GitHub</a>
                </button>
                <button className="btn btn-primary border">
                    <a className="card-link text-white" target="_blank" href={props.live}>Live</a>
                </button>
            </div>
        </div>
    )
};

export default Project;