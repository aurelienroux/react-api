import React from "react";

class Client extends React.Component {
  state = {
    data: "",
    loading: true
  };

  async componentDidMount() {
    await fetch(
      `https://tracktik-challenge.staffr.com/clients?id=${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }));
    console.log("data: ", this.state.data);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.data[0].givenName}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Client;
