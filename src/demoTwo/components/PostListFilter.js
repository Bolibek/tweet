export default function PostListFilter({ filter, onFilterPostSelect }) {
	const buttons = [
		{ name: "all", label: "All" },
		{ name: "like", label: "Like" },
	].map(({ name, label }) => {
		const active = filter === name;
		const btnClass = active ? "info" : "success";
		return (
			<div>
				<button
					className={`btn ${btnClass}`}
					key={name}
					onClick={() => onFilterPostSelect(name)}
				>
					{label}
				</button>
			</div>
		);
	});
	return <div className="buttons">{buttons}</div>;
}
