export default function PostListItem(props) {
	const { label, important, isLiked, onDelete, onToggleImportantPost, onToggleLiked } = props;
	let classes = {
		main: "app-list-item d-flex justify-content-start",
		lbl: "label",
		star: "btn",
		trash: "btn",
		heart: "btn",
    rights: "right-side"
	};
	if (important) {
		classes.star += " important";
		classes.lbl += " important";
	}
	if (isLiked) {
		classes.heart += " important";
	}
	const { main, star, trash, heart, lbl, rights } = classes;
	return (
		<span className={main}>
			<h3 onClick={onToggleLiked} className={lbl}>{label}</h3>
			<span className={rights}>
				<button className={star} onClick={onToggleImportantPost}>
					<i className="material-icons">star</i>
				</button>
				<button className={trash} onClick={onDelete}>
					<i class="material-icons">delete</i>
				</button>
				<button onClick={onToggleLiked} className={heart}>
					<i className="material-icons">favorite</i>
				</button>
			</span>
		</span>
	);
}
