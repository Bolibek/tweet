import React, { Component } from 'react'
import PostListItem from '../PostListItem'
export default class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const {posts, onDelete, onToggleImportant, onToggleLiked} = this.props;
    const elements = posts.map(post =>{
      const {id, ...postProps} = post;
      return(
        <li key={post.id} className="list-group-item">
          <PostListItem 
            {...postProps}
            onDelete={()=> onDelete(id)}
            onToggleLiked={()=> onToggleLiked(id)}
            onToggleImportant={()=> onToggleImportant(id)}
          
          />
        </li>
      )
    })
    return (
      <ul>
        {elements}
      </ul>
    )
  }
}


