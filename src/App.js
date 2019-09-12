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
            {this.state.data.map((site, index) => {
              return (
                <div key={index}>
                  <div>{site.title}</div>
                  <div>{site.id}</div>
                  <div>{site.address.street}</div>
                  <div>{site.address.city}</div>
                  <div>{site.address.zipCode}</div>
                  <div>{site.contacts.main.firstName}</div>
                  <div>{site.contacts.main.lastName}</div>
                  <div>{site.contacts.main.email}</div>
                  <div>
                    <img
                      src={site.images[0]}
                      alt={`${site.title} headquarters`}
                    />
                  </div>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
