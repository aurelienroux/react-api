import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Avatar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";

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

const Site = props => {
  const classes = useStyles();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://tracktik-challenge.staffr.com/sites?id=${props.match.params.id}`
    )
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false));

    return () => console.log("unmounting...");
  }, [props.match.params.id]);

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <div className="site">
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
                alt={`${data[0].title} headquarters`}
                src={data[0].images[0]}
                className={classes.bigAvatar}
              />
              <div className="header__infos">
                <h2 className="header__title">{data[0].title}</h2>
                <div className="header__address">
                  <div>
                    {data[0].address.street}, {data[0].address.city}
                  </div>
                  <div>
                    {data[0].address.state}, {data[0].address.country},{" "}
                    {data[0].address.zipCode}
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <div className="picture">
            <img
              src={data[0].images[1]}
              alt={`${data[0].title} headquarters`}
            />
          </div>

          <Container maxWidth="md">
            <div className="contact">
              <div className="contact__infos contact__person">
                <div className="contact__icon">
                  <PersonIcon />
                </div>
                <div>
                  <div>
                    {data[0].contacts.main.firstName}{" "}
                    {data[0].contacts.main.lastName}
                  </div>
                  <div>{data[0].contacts.main.jobTitle}</div>
                </div>
              </div>

              <div className="contact__infos contact__phone">
                <div className="contact__icon">
                  <PhoneIcon />
                </div>

                {data[0].contacts.main.phoneNumber}
              </div>

              <div className="contact__infos contact__email">
                <div className="contact__icon">
                  <MailIcon />
                </div>
                <a href={"mailto:" + data[0].contacts.main.email}>
                  {data[0].contacts.main.email}
                </a>
              </div>

              <div className=" contact__infos contact__address">
                <div className="contact__icon">
                  <RoomIcon />
                </div>
                <div>
                  <div>{data[0].contacts.main.address.street}</div>
                  <div>
                    {data[0].contacts.main.address.country},{" "}
                    {data[0].contacts.main.address.state},{" "}
                    {data[0].contacts.main.address.zipCode}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Site;
