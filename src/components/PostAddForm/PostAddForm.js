import React from 'react';
export default class PostAddForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
    this.onValueChange=this.onValueChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onValueChange(e){
    this.setState({text: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onAdd(this.state.text)
    this.setState({text: ""})
  }
  render() {
    return (
    <form onSubmit={this.onSubmit}>
      <input
        type="text"
        name=""
        placeholder="What are you thinking about?"
        onChange={this.onValueChange}
        value={this.state.text} />
      <button
        // onClick={()=>onAdd("Hello World")}
      >
        Add Form
      </button>
    </form>
  );
  }
  
};

// const PostAddForm = ({onAdd}) => {
//   return (
//     <div>
//       <input
//         type="text"
//         name=""
//         placeholder="What are you thinking about?" />
//       <button
//         onClick={()=>onAdd("Hello World")}
//       >
//         Add Form
//       </button>
//     </div>
//   );
// };

// export default PostAddForm;
