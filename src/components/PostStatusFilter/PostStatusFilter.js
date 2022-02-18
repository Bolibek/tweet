import React, { Component } from "react";

export default class PostStatusFilter extends Component {
	constructor(props) {
		super(props);
		this.buttons = [
			{ name: "all", label: "All" },
			{ name: "like", label: "Liked" },
		];
	}
	render() {
		const buttons = this.buttons.map(({ name, label }) => {
			const active = this.props.filter === name;
			const clazz = active ? "btn-info" : "btn-outline-secondary";
			return (
				<button 
          className={`btn ${clazz}`} 
          type="button" key={name}
          onClick={()=> this.props.onFilterSelect(name)}
        >
					{label}
				</button>
			);
		});
		return <div>{buttons}</div>;
	}
}

// const PostStatusFilter = () => {
//   return (
//     <div>
//       <button className="btn btn-primary">All</button>
//       <button className="btn btn-success">Liked</button>
//     </div>
//   )
// }

// export default PostStatusFilter;
