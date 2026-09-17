import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    const { id, name, image, status, onAction } = this.props;

    return (
      <div
        className="pet-card"
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          width: '250px',
          textAlign: 'center'
        }}
      >
        <h2>{name}</h2>

        <img
          src={image}
          alt={name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />

        <h3>Status: {status}</h3>

        <button onClick={() => onAction(id)}>
          Feed / Interact
        </button>
      </div>
    );
  }
}

export default ChildComponent;