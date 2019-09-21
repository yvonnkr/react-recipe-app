import React, { Component } from 'react';

export default class SingleRecipe extends Component {
  render() {
    return (
      <div>
        <h3>hello from single recipe page, id: {this.props.match.params.id}</h3>
      </div>
    );
  }
}
