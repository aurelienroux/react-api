import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Avatar } from "@material-ui/core";
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

const ListingSites = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(
      "https://tracktik-challenge.staffr.com/sites?_page=1&_limit=5"
    );
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl();
  });

  return (
    <Container maxWidth="md" className="container listing-sites">
      <h1>Sites</h1>
      {loading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <div>
          {data.map(({ title, id, address, contacts, images }, index) => {
            return (
              <Link to={`site/${id}`} key={index}>
                <div className="item-card">
                  <div className="item-card__avatar">
                    <Avatar
                      alt={`${title} headquarters`}
                      src={images[0]}
                      className={classes.bigAvatar}
                    />
                  </div>

                  <div className="item-card__infos">
                    <div>{title}</div>
                    <div className="address">
                      <div>
                        {address.street} {address.city}
                      </div>
                      <div>
                        {address.state}, {address.country}, {address.zipCode}
                      </div>
                    </div>
                    <div className="contact">
                      Contact: {contacts.main.firstName}{" "}
                      {contacts.main.lastName}
                    </div>
                  </div>

                  <div className="item-card__arrow">
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

export default ListingSites;
