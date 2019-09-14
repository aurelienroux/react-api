import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, CircularProgress, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

const ListingClients = () => {
  const classes = useStyles();
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
  }, [data]);

  return (
    <Container maxWidth="md" className="listing-clients">
      {loading ? (
        <div className="loader">
          <CircularProgress size={50} />
        </div>
      ) : (
        <div>
          {data.map(({ givenName, id, logo, tags }, index) => {
            return (
              <Link to={`client/${id}`} key={index}>
                <div className="client">
                  <div className="avatar">
                    <Avatar
                      alt={`${givenName} logo`}
                      src={logo}
                      className={classes.bigAvatar}
                    />
                  </div>
                  <div className="infos">
                    <div>{givenName}</div>
                    {tags.map((tag, index) => (
                      <span className="tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="arrow">
                    <ArrowForwardIosIcon />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default ListingClients;
