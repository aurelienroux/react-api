import React from "react";
import { Link } from "react-router-dom";

class ListingClients extends React.Component {
  state = {
    data: "",
    loading: true
  };

  async componentDidMount() {
    await fetch(
      "https://tracktik-challenge.staffr.com/clients?_page=1&_limit=10"
    )
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
            {this.state.data.map(({ givenName, id }, index) => {
              return (
                <div key={index}>
                  <Link to={`site/${id}`}>
                    <div>{givenName}</div>
                    <div>{id}</div>
                    <hr></hr>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ListingClients;
