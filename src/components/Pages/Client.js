import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Avatar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});
const Client = props => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://tracktik-challenge.staffr.com/clients?id=${props.match.params.id}`
    )
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false));

    // cleaning up effect
    return () => console.log("unmounting...");
  }, [props.match.params.id]);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="client">
      {loading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <div className="profile">
          <div className="header">
            <Container className="header__container" maxWidth="md">
              <div onClick={goBack} className="header__arrow">
                <ArrowBackIosIcon />
              </div>
              <Avatar
                alt={`${data[0].givenName} headquarters`}
                src={data[0].logo}
                className={classes.bigAvatar}
              />
              <div className="header__infos">
                <h2 className="header__title">{data[0].givenName}</h2>
              </div>
            </Container>
          </div>

          <Container maxWidth="md">
            <h3>Specialties</h3>
            {data[0].tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </Container>
        </div>
      )}
    </div>
  );
};

export default Client;
