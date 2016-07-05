import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Festivals } from '../api/festivals.jsx';

// App component - represents the whole app
class App extends Component {
  renderFestivals() {
    this.props.festivals.map((fest) => {
      console.log(fest.title)
    })
    return this.props.festivals.map((fest) => (
      <Festival key={fest._id} fest={fest} />
    ));
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1>Festivals List</h1>
          </div>
        </header>
   
        <ul>
          {this.renderFestivals()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  festivals: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    festivals: Festivals.find({}).fetch(),
  };
}, App);
