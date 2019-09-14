import React, { useState, useEffect } from "react";
import { Container, CircularProgress } from "@material-ui/core";

const Site = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(
      `https://tracktik-challenge.staffr.com/sites?id=${props.match.params.id}`
    );
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  });

  return (
    <Container maxWidth="md" className="container">
      {loading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <h1>{data[0].title}</h1>
          <div>
            <img
              src={data[0].images[0]}
              alt={`${data[0].title} headquarters`}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Site;
