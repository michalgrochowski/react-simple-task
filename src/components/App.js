import React, { Component } from 'react';

import MainHeader from "./main-header.js"
import MainContainer from "./main-container.js"
import MainFooter from "./main-footer.js"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    const jsonData = 'http://localhost:3000/data.json';

    fetch(jsonData)
      .then(response => response.json())
      .then(data => {
          this.setState({
            data: data
          })
        }
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <MainHeader />
        <MainContainer jsonData={this.state.data} />
        <MainFooter />
      </div>
    );
  }
}

export default App;