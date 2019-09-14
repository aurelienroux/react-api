import React from "react";
import { Container, CircularProgress, Avatar } from "@material-ui/core";

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
    return (
      <Container maxWidth="md" className="container">
        {this.state.loading ? (
          <div className="loader">
            <CircularProgress />
          </div>
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
      </Container>
    );
  }
}

export default Site;
