import React, { Component } from "react";

export default class PostAddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: "",
		};
		this.onValueChange = this.onValueChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onValueChange(e) {
		this.setState({ text: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onAdd(this.state.text);
		this.setState({ text: "" });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.text}
						onChange={this.onValueChange}
						placeholder="What are you thinking about?"
					/>
					<button>Add Post</button>
				</form>
			</div>
		);
	}
}
