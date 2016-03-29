import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component{

  onSearch(e){
    e.preventDefault();
    console.log("serached");
    let username = this.refs.username.value.trim();
    if(!username){
      alert("Error!  no username");
      return;
    }

    this.props.searchFunction(username);
  }

  render(){

    return (
      <div>
        <form onSubmit={this.onSearch.bind(this)}>
          <label>Search User</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}

export default Search
