import React, { Component } from 'react';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  return Authentication;
}

// In some other location the following code to use this
// We want to use this HOC

// import Authentication
// import Resources

// const ComposedComponent= Authentication(Resources);

// // in some render method
// <ComposedComponent resources={resouceList} />