import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, CircularProgress } from "@material-ui/core";

const ListingSites = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(
      "https://tracktik-challenge.staffr.com/sites?_page=1&_limit=10"
    );
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <Container>
      {loading ? (
        <div>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {data.map(({ title, id, address, contacts, images }, index) => {
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
          })}
        </div>
      )}
    </Container>
  );
};

export default ListingSites;
