import PostListItem from "./PostListItem";
export default function PostList({ posts, onDelete, onToggleImportantPost, onToggleLiked }) {
	const elements = posts.map((post) => {
		const { id, ...postProps } = post;
		return (
			<li key={id}>
				<PostListItem
					{...postProps}
					onDelete={() => onDelete(id)}
					onToggleImportantPost={() => onToggleImportantPost(id)}
          onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		);
	});
	return <ul>{elements}</ul>;
}
