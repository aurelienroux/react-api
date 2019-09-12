import React from "react";

class App extends React.Component {
  state = {
    data: "",
    loading: true
  };

  async componentDidMount() {
    await fetch("http://localhost:3000/posts")
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }));
    console.log("data: ", this.state.data);
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.data.map((el, index) => {
              return <div key={index}>{el.author}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
