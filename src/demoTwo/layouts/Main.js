import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import SearchPanel from "../components/SearchPanel";
import PostList from "../components/PostList";
import PostListFilter from "../components/PostListFilter";
import PostAddForm from "../components/PostAddForm";

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{ label: "hi", id: 1, isLiked: false, important: true },
				{ label: "hi there", id: 2, isLiked: false, important: false },
				{ label: "hi, man", id: 3, isLiked: false, important: false },
			],
      term: "",
      filter: "all"
		};
		this.deletePost = this.deletePost.bind(this);
		this.toggleImportantPost = this.toggleImportantPost.bind(this);
		this.toggleLikedPost = this.toggleLikedPost.bind(this);
		this.addPost = this.addPost.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.filterPost =this.filterPost.bind(this);
    this.updatePostSearch = this.updatePostSearch.bind(this);
    this.filterPostSelect = this.filterPostSelect.bind(this);
		this.maxId = 4;
	}

	deletePost(id) {
		this.setState(({ posts }) => {
			const index = posts.findIndex((post) => post.id === id);
			const before = posts.slice(0, index);
			const after = posts.slice(index + 1);
			const newPostArray = [...before, ...after];
			return {
				posts: newPostArray,
			};
		});
	}
	toggleImportantPost(id) {
		this.setState(({ posts }) => {
			const index = posts.findIndex((post) => post.id === id);
			const oldPost = posts[index];
			const newPost = { ...oldPost, important: !oldPost.important };
			const before = posts.slice(0, index);
			const after = posts.slice(index + 1);
			const newPostArray = [...before, newPost, ...after];
			return {
				posts: newPostArray,
			};
		});
	}
	toggleLikedPost(id) {
		this.setState(({ posts }) => {
			const index = posts.findIndex((post) => post.id === id);
			const oldPost = posts[index];
			const newPost = { ...oldPost, isLiked: !oldPost.isLiked };
			const before = posts.slice(0, index);
			const after = posts.slice(index + 1);
			const newPostArray = [...before, newPost, ...after];
			return {
				posts: newPostArray,
			};
		});
	}
	addPost(text) {
		const newPost = {
			label: text,
			important: false,
			isLiked: false,
			id: this.maxId++,
		};
		this.setState(({ posts }) => {
			const newPostArray = [...posts, newPost];
			return {
				posts: newPostArray,
			};
		});
	}
  searchPost(posts, term){
    if(term.length === 0){
      return posts
    }
    return posts.filter((post) => {
      return post.label.indexOf(term) > -1;
    })
  }
  filterPost(posts, filter){
    if(filter === "like"){
      return posts.filter((post) => post.isLiked)
    }else{
      return posts
    }
  }
  updatePostSearch(term){
    this.setState({term})
  }
  filterPostSelect(filter){
    this.setState({filter})
  }
	render() {
    const {term, filter, posts} = this.state;
    const likedPosts = posts.filter((post) => post.isLiked).length;
    const allPosts = posts.length;
    const visiblePosts = this.filterPost(this.searchPost(posts, term), filter);
		return (
			<div className="main-comp">
				<div className="container content">
          <AppHeader likedPosts={likedPosts} allPosts={allPosts}/>
					<SearchPanel onUpdatePostSearch={this.updatePostSearch}/>
					<PostListFilter filter={filter} onFilterPostSelect={this.filterPostSelect}/>
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deletePost}
					onToggleImportantPost={this.toggleImportantPost}
					onToggleLiked={this.toggleLikedPost}
				/>
				<PostAddForm addPost={this.addPost} />
			</div>
		);
	}
}
