import React from "react";
import "./App.css";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../PostStatusFilter";
import Postlist from "../PostList";
import PostAddForm from "../PostAddForm";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					label: "Going to learn React JS",
					important: true,
					like: false,
					id: 1,
				},
				{ label: "That's good!", important: false, like: false, id: 2 },
				{ label: "I need a break", important: false, like: false, id: 3 },
			],
			term: "",
			filter: "all",
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
		this.onFilterSelect = this.onFilterSelect.bind(this);
		this.maxId = 4;
	}
	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArray = [...before, ...after];
			// const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
			return {
				data: newArray,
			};
		});
	}

	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const oldItem = data[index];
			const newItem = { ...oldItem, important: !oldItem.important };
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArray = [...before, newItem, ...after];
			return { data: newArray };
		});
	}
	onToggleLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id === id);
			const oldItem = data[index];
			const newItem = { ...oldItem, like: !oldItem.like };
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArray = [...before, newItem, ...after];
			return { data: newArray };
		});
	}
	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArray = [...data, newItem];
			return { data: newArray };
		});
	}
	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.label.indexOf(term) > -1;
		});
	}

	filterPost(items, filter) {
		if (filter === "like") {
			return items.filter((item) => item.like);
		} else {
			return items;
		}
	}
	onUpdateSearch(term) {
		this.setState({ term });
	}

	onFilterSelect(filter) {
		this.setState({ filter });
	}
	render() {
		const { data, term, filter } = this.state;
		const liked = data.filter((item) => item.like).length;
		const allPosts = data.length;
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
		return (
			<div>
				<div>
					<buton className="btn btn-primary justify-content-center">
						Hello World
					</buton>
					<AppHeader liked={liked} allPosts={allPosts} />
					<div className="search-panel">
						<SearchPanel onUpdateSearch={this.onUpdateSearch} />
						<PostStatusFilter
							filter={filter}
							onFilterSelect={this.onFilterSelect}
						/>
					</div>
					<Postlist
						posts={visiblePosts}
						onDelete={this.deleteItem}
						onToggleImportant={this.onToggleImportant}
						onToggleLiked={this.onToggleLiked}
					/>
					<PostAddForm onAdd={this.addItem} />
				</div>
			</div>
		);
	}
}

// const App = () => {
//   const data = [
//     { label: "Going to learn React JS", important: true, id: "aa" },
//     { label: "That's good!", important: false, id: "ab" },
//     { label: "I need a break", important: false, id: "ac" }
//   ]
//   return (
//     <div>
//       <buton className="btn btn-primary justify-content-center">Hello World</buton>
//       <AppHeader />
//       <div className="search-panel">
//         <SearchPanel />
//         <PostStatusFilter />
//       </div>
//       <Postlist posts={data} onDelete={id => console.log(id)} />
//       <PostAddForm />
//     </div>
//   );
// }
// export default App;
