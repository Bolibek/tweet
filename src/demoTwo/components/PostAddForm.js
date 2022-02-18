import { useState } from "react";

export default function PostAddForm(props) {
	const [text, setText ] = useState("");
	const { addPost } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(text);
    setText("");
  }
  const handleValueChange = (e) =>{
    setText(e.target.value);
  }
	return (
			<form className="form" onSubmit={handleSubmit}>
				<input 
					type="text"
					onChange={handleValueChange}
					placeholder="What do you think?"
          value={text}
				/>
				<button className="btn btn-primary btn-form">Add Form</button>
			</form>
	);
}
