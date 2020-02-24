import React from 'react'

const AddChirp = props => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input onChange={(e) => props.handleAuthorInput(e)} type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" value={props.authorInput} />
            </div>
            <div className="form-group">
                <label htmlFor="chirp">What's On Your Mind?</label>
                <input onChange={(e) => props.handleChirpInput(e)} type="text" className="form-control" id="chirp" placeholder="Say something" value={props.chirpInput} />
            </div>
            <button onClick={(e) => props.handleSubmit(e)} type="Submit" className="btn btn-primary">Chirp!</button>
        </form>
    )
}

export default AddChirp