import React, { Component } from 'react'

export default class SearchPanel extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.onUpdateSearch=this.onUpdateSearch.bind(this);
  }
  onUpdateSearch(e){
    const term = e.target.value;
    this.setState({term})
    // this.setState({ term: term})
    this.props.onUpdateSearch(term)
  }
  render() {
    return (
      <div>
        <input 
      type="text" 
      className="search"
      placeholder="Search by post"
      onChange={this.onUpdateSearch}
    />
      </div>
    )
  }
}


// const SearchPanel = ( )=> {
//   return(
//     <input 
//       type="text" 
//       className="search"
//       placeholder="Search by post"
//     />
//   )
// }

// export default SearchPanel;
