// import React, { Component } from "react";

// export default class PostListItem extends Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {
// 	// 		important: false,
// 	// 		like: false,
// 	// 	};
// 	// 	this.onImportant = this.onImportant.bind(this);
// 	// 	this.onLike = this.onLike.bind(this);
// 	// }
// 	// onImportant() {
// 	// 	this.setState(({ important }) => ({ important: !important }));
// 	// }
// 	// onLike() {
// 	// 	this.setState(({ like }) => ({ like: !like }));
// 	// }
// 	render() {
// 		const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = this.props;
// 		let classes = {
// 			main: "app-list-item d-flex justify-content-between",
// 			lbl: "",
// 			star: "glyphicon glyphicon-star btn-trash",
// 			trash: "glyphicon glyphicon-trash",
// 			heart: "glyphicon glyphicon-heart",
// 		};
// 		if (important) {
// 			classes.star += " important";
// 			classes.lbl += " important";
// 		}
// 		if (like) {
// 			classes.heart += " important";
// 		}
// 		const { main, star, trash, heart, lbl } = classes;
// 		return (
// 			<>
// 				<li>
// 					<span className={main}>
// 						<span className={lbl} onClick={onToggleLiked}>
// 							{label}
// 						</span>
// 						<span>
// 							<button
// 								type="button"
// 								className="btn-star btn-sm"
// 								onClick={onToggleImportant}
// 							>
// 								<i className={star}>star</i>
// 							</button>
// 							<button onClick={onDelete}>
// 								<i className={trash}>trash</i>
// 							</button>
// 							<span className={heart}>heart</span>
// 						</span>
// 					</span>
// 				</li>
// 			</>
// 		);
// 	}
// }

const PostListItem = (props) => {
	const { label, onDelete, onToggleImportant, onToggleLiked, important, like } = props;

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
		<>
			<li>
				<span className={main}>
					<span className={lbl} onClick={onToggleLiked}>
						{label}
					</span>
					<span>
						<button
							type="button"
							className="btn-star btn-sm"
							onClick={onToggleImportant}
						>
							<i className={star}>star</i>
						</button>
						<button onClick={onDelete}>
							<i className={trash}>trash</i>
						</button>
						<span className={heart}>heart</span>
					</span>
				</span>
			</li>
		</>
	);
};

export default PostListItem;
