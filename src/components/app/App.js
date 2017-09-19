import React, { Component } from 'react';

import Card from '../card/Card';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  data = [
    {
      header: 'John Galt',
      subheader: 'Father',
      info: [
        { icon: 'email-icon', text: 'galt@test.com' },
        { icon: 'comment-icon', text: '+79280000111' }
      ],
      isEditable: false,
      isClickable: false
    },
    {
      header: 'John Doe',
      subheader: 'Uncle',
      info: [
        { icon: 'email-icon', text: 'doe@test.com' },
        { icon: 'comment-icon', text: '+79230000111' },
        { icon: '', text: 'additional info' }
      ],
      isEditable: true,
      isClickable: false
    },
    {
      header: 'Jane Doe',
      subheader: 'Mother',
      info: [
        { icon: 'email-icon', text: 'jane@test.com' },
        { icon: 'comment-icon', text: '+79260000111' }
      ],
      isEditable: false,
      isClickable: true
    }
  ];

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kinedu React Exercise</h2>
        </div>
        <div className="App-cards">
          {this.data.map((item, i) => {
            return <Card key={i} details={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
