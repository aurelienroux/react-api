import React from "react";

class App extends React.Component {
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
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {this.state.data.map(
              ({ title, id, address, contacts, images }, index) => {
                return (
                  <div key={index}>
                    <div>{title}</div>
                    <div>{id}</div>
                    <div>{address.street}</div>
                    <div>{address.city}</div>
                    <div>{address.zipCode}</div>
                    <div>{contacts.main.firstName}</div>
                    <div>{contacts.main.lastName}</div>
                    <div>{contacts.main.email}</div>
                    <div>
                      <img src={images[0]} alt={`${title} headquarters`} />
                    </div>
                    <hr></hr>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
