import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class Festival extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <p className="h3">{this.props.fest.title}</p>
      </div>
    );
  }
}
 
Festival.propTypes = {
  fest: PropTypes.object.isRequired,
};
