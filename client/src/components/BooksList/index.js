import React from "react";

function BooksList(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col">
                            <h5>{props.title}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h6>{props.authors}</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 text-right">
                    <a href={props.bookLink} target="_blank" className="mr-1">
                        <button>View</button>
                    </a>
                    <button onClick={props.handleClick2}>{props.saveOrDelete}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <img src={props.image} alt="https://via.placeholder.com/150" />
                </div>
                <div className="col-sm-8">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default BooksList;