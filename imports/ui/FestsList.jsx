import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
import { Festivals } from '../api/festivals.jsx';

import Festival from './Festival.jsx';

export default class FestsList extends Component {
  constructor(props) {
    super(props);
    this.changeFest = this.changeFest.bind(this);
    this.state = {
      fest: null
    };
  }

  renderFestivals() {
    return this.props.festivals.map((fest) => (
      <Festival key={fest._id} fest={fest} onClick={() => this.changeFest(fest)}/>
    ), this);
  }

  changeFest(data) {
    this.setState({
      fest: data._id
    });
  }

  render() {
    return (
      <div id="app--festslist">
        <p className="h3 title">Fest List</p>
        <div>
          {this.renderFestivals()}
        </div>
      </div>
    );
  }
}

FestsList.propTypes = {
  festivals: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    festivals: Festivals.find({}).fetch(),
  };
}, FestsList);
