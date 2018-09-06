import React, { Component } from 'react';
import './App.css';

import { FaPlus } from 'react-icons/fa'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="animation-1">
          <h1>Simple Progress Bar</h1>
          <div className='bar'></div>
        </div>

          <br />

        <div className='animation-2'>
          <i><FaPlus className='plus'/></i>
        </div>

          <br />

        <div className='animation-3'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
