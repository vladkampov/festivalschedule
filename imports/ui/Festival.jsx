import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Festival extends Component {
  render() {
    return (
      <li>{this.props.fest.title}</li>
    );
  }
}
 
Festival.propTypes = {
  fest: PropTypes.object.isRequired,
};
