import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: 'Jaime',
      userData: [],
      userRepos: [],
      perPage: 5
    }

  }

  render(){
    return(
      <div>
        {this.props.clientId}
      </div>
    )
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
