import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import FestsList from './FestsList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fest: null
    };
  }

  onUpdate() {
    console.log("lalвфыв")
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="container">
            <h1>Festivals List</h1>
          </div>
        </header>
        <div id="app--body">
          <div className="container">
            <FestsList onUpdate={this.onUpdate}/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default createContainer(() => {
  return {
  };
}, App);
