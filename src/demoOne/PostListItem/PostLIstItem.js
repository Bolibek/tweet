import React, { Component } from "react";

export default class PostLIstItem extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const {
			label,
			onDelete,
			onToggleImportant,
			onToggleLiked,
			important,
			like,
		} = this.props;
		let classes = {
			main: "app-list-item d-flex justify-content-between",
			lbl: "",
			star: "glyphicon glyphicon-star btn-trash",
			trash: "glyphicon glyphicon-trash",
			heart: "glyphicon glyphicon-heart",
		};
		if (important) {
			classes.star += " important";
			classes.lbl += " important";
		}
		if (like) {
			classes.heart += " important";
		}
		const { main, star, trash, heart, lbl } = classes;
		return (
			<div>
					<span className={main}>
						<span className={lbl} onClick={onToggleLiked}>
							{label}
						</span>
						<span>
							<button onClick={onToggleImportant}>
								<i className={star}>star</i>
							</button>
							<button onClick={onDelete}>
								<i className={trash}>trash</i>
							</button>
							<span className={heart}>heart</span>
						</span>
					</span>
			</div>
		);
	}
}
