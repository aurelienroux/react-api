import React from "react";

class Site extends React.Component {
  state = {
    data: "",
    loading: true
  };

  async componentDidMount() {
    await fetch(
      `https://tracktik-challenge.staffr.com/sites?id=${this.props.match.params.id}`
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
            <div>{this.state.data[0].title}</div>
            <div>
              <img
                src={this.state.data[0].images[0]}
                alt={`${this.state.data[0].title} headquarters`}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Site;
