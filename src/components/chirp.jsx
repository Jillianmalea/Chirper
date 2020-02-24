import React from 'react';

const Chirp = props => {
    return (
        <div className="card text-dark" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.chirp.author}</h5>
                <p className="card-text">{props.chirp.chirp}</p>
            </div>
        </div>
    )
}

export default Chirp