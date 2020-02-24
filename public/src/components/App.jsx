import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chrirp: [
                {
                    author: 'Jillian',
                    message: 'Ovaries Suck'
                },

                {
                    author: 'Jillian',
                    message: 'Vitamin C or Die'
                },

                {
                    author: 'Jillian',
                    message: 'I lost my headphones'
                }

            ],
            authorInput: '',
            messageInput: '',

        }

    }

    handleAuthorInput(e) {
        this.setState({ authorInput: e.target.value });

    }
    handleMessageInput(e) {
        this.setState({ messageInput: e.target.value });

    }
    handleClick() {
        const newChirp = {
            author: this.state.authorInput,
            message: this.state.messageInput
        }
        this.setState({ chirp: [...this.state.chirp, newChirp] })
    }
}
render(){
    return (
        <React.Fragment>
            <input type="text" onChange={ (e) => this.handleAuthorInput(e)}/>
            <input type="text" />

        </React.Fragment>
    )

    return this.state.chirp.map(chirp => {

    })
}



export default App