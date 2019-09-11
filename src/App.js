import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts?q=third")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    console.log("data: ", this.state.data);
    return <div>loading</div>;
  }
}

export default App;
