import React, { Component } from 'react';

import PrimaryLayout from './components/primary-layout';
class App extends Component {

  state = {
  response: ''
};
componentDidMount() {
  this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
}
callApi = async () => {
  const response = await fetch('/api/hello');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

  render() {
    return (
      <div>
        <PrimaryLayout />
        <h1 className="App-intro">{this.state.response}</h1>
      </div>
    );
  }
}

export default App;
