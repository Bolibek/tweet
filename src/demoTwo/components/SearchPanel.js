import { useState } from "react";
export default function SearchPanel({ onUpdatePostSearch }) {
	const [term, setTerm] = useState("");
	const updatePostSearch = (e) => {
		const term = e.target.value;
		setTerm({ term });
		onUpdatePostSearch(term);
	}
	return (
		<div>
			<input 
			  type="search" 
				className="search"
				onChange={updatePostSearch}
				placeholder="Search posts"
			/>
		</div>
	);
}
