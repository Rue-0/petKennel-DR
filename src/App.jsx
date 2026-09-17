import React, { Component } from 'react';
import ChildComponent from './childComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: initialData
    };
  }

  handleUpdate = (id) => {
    const updatedCharacters = this.state.characters.map((char) => {
      if (char.id === id) {
        const isHappy = char.status === "Happy";

        return {
          ...char,
          status: isHappy ? "Sad" : "Happy",
          image: isHappy ? char.sadImage : char.happyImage
        };
      }

      return char;
    });

    this.setState({
      characters: updatedCharacters
    });
  };

  render() {
    return (
      <div
        className="app-container"
        style={{
          padding: '40px',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <h1>Pet Kennel</h1>

        <div
          className="children-container"
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}
        >
          {this.state.characters.map((char) => (
            <ChildComponent
              key={char.id}
              id={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
              onAction={this.handleUpdate}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;