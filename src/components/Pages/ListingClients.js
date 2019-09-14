import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, CircularProgress } from "@material-ui/core";

const ListingClients = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(
      "https://tracktik-challenge.staffr.com/clients?_page=1&_limit=10"
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
          {data.map(({ givenName, id }, index) => {
            return (
              <div key={index}>
                <Link to={`client/${id}`}>
                  <div>{givenName}</div>
                  <div>{id}</div>
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

export default ListingClients;
