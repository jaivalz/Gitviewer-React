import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'jaivalz',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
  // Get userdata from github
  getUserData(){
      $.ajax({
        url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({userData: data});
          console.log(data);
        }.bind(this),
        error: function(xhr, status, err){
          this.setState({userData: null});
          alert(err);
        }.bind(this)
      });
      //alert('got it');
  }

  searchGitUser(name){
    this.state.username = name;
    this.getUserData();
    this.getUserRepos();
  }

  getUserRepos(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sorted=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return(
      <div>
        <Search searchFunction = {this.searchGitUser.bind(this)} />
        <hr />
        <Profile {...this.state} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

App.defaultProps = {
  clientId: '',
  clientSecret: ''
}

export default App
