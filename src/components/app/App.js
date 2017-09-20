import React, { Component } from 'react';

import Card from '../card/Card';

import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  data = [
    {
      id: 1,
      header: 'John Galt',
      subheader: 'Father',
      info: [
        { id: 1, icon: 'email-icon', text: 'galt@test.com' },
        { id: 2, icon: 'comment-icon', text: '+79280000111' },
      ],
      isEditable: false,
      isClickable: false,
    },
    {
      id: 2,
      header: 'John Doe',
      subheader: 'Uncle',
      info: [
        { id: 1, icon: 'email-icon', text: 'doe@test.com' },
        { id: 2, icon: 'comment-icon', text: '+79230000111' },
        { id: 3, icon: '', text: 'additional info' },
      ],
      isEditable: true,
      isClickable: false,
    },
    {
      id: 3,
      header: 'Jane Doe',
      subheader: 'Mother',
      info: [
        { id: 1, icon: 'email-icon', text: 'jane@test.com' },
        { id: 2, icon: 'comment-icon', text: '+79260000111' },
      ],
      isEditable: false,
      isClickable: true,
    },
  ];

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kinedu React Exercise</h2>
        </div>
        <div className="App-cards">
          {this.data.map(item => <Card key={item.id} details={item} />)}
        </div>
      </div>
    );
  }
}

export default App;
