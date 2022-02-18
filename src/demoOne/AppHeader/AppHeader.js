import React, { Component } from 'react'

export default class AppHeader extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const {allPosts, liked} = this.props;
    return (
      <div>
        <h1>Fayzullayev Bolibek</h1>
        <h2>{allPosts} posts, like {liked}</h2>
      </div>
    )
  }
}
