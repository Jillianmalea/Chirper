import React, { Component } from 'react';
import './app.css';
import Timeline from './timeline';
import AddChirp from './addChirp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorInput: "",
      chirpInput: "",
      chirps: [
        {
          author: "Jillian",
          chirp: "Ovaries Suck"
        },
        {
          author: "Jillian",
          chirp: "Vitamin C or DIE"
        },
        {
          author: "Jillian",
          chirp: "I am so sleeeeeepy"
        },
      ]
    }

    this.handleAuthorInput = this.handleAuthorInput.bind(this);
    this.handleChirpInput = this.handleChirpInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorInput = event => this.setState({ authorInput: event.target.value });
  handleChirpInput = event => this.setState({ chirpInput: event.target.value });

  handleSubmit(event) {
    event.preventDefault();
    const newChirp = {
      author: this.state.authorInput,
      chirp: this.state.chirpInput
    }

    this.setState({
      chirps: [...this.state.chirps, newChirp],
      authorInput: "",
      chirpInput: ""
    });
  }

  render() {
    return (
      <div className="App container-fluid bg-dark text-light">
        <div>
          <h2>Chirpr</h2>
        </div>
        <div>
          <Timeline chirps={this.state.chirps} />
        </div>
        <div>
          <AddChirp authorInput={this.state.authorInput} chirpInput={this.state.chirpInput} handleAuthorInput={this.handleAuthorInput} handleChirpInput={this.handleChirpInput} handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App