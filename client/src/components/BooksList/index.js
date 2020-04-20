import React from "react";

function BooksList(props) {
    return (
        <div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        <h5>{props.title}</h5>
                    </div>
                    <div className="row">
                        <h6>{props.authors}</h6>
                    </div>
                </div>
                <div className="col-sm-4">
                    <button onClick={props.handleClick1}>{props.saveOrView}</button>
                    <button onClick={props.handleClick2}>{props.saveOrDelete}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <img src={props.image} />
                </div>
                <div className="col-sm-8">
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default BooksList;