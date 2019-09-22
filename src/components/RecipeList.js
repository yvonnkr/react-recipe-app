import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
  render() {
    return (
      <div>
        <h3>Recipe list</h3>
        <Recipe />
      </div>
    );
  }
}
