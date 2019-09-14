import React from "react";
import { Link } from "react-router-dom";
import { Container, CircularProgress } from "@material-ui/core";

class ListingSites extends React.Component {
  state = {
    data: "",
    loading: true
  };

  async componentDidMount() {
    await fetch("https://tracktik-challenge.staffr.com/sites?_page=1&_limit=10")
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }));
    console.log("data: ", this.state.data);
  }

  render() {
    return (
      <Container>
        {this.state.loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div>
            {this.state.data.map(
              ({ title, id, address, contacts, images }, index) => {
                return (
                  <div key={index}>
                    <Link to={`site/${id}`}>
                      <div>{title}</div>
                      <div>{id}</div>
                      <div>{address.street}</div>
                      <div>{address.city}</div>
                      <div>{address.zipCode}</div>
                      <div>
                        {contacts.main.firstName} {contacts.main.lastName}
                      </div>
                      <div>
                        <img src={images[0]} alt={`${title} headquarters`} />
                      </div>
                      <hr></hr>
                    </Link>
                  </div>
                );
              }
            )}
          </div>
        )}
      </Container>
    );
  }
}

export default ListingSites;
