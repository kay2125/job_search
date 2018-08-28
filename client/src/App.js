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
    // const data= JSON.parse("{"+this.state.response+"}");
    const data = this.state.response
    return (
      <div>
        <PrimaryLayout response={this.state.response} />
        <h1 className="App-intro">{data}</h1>
      </div>
    );
  }
}

export default App;
