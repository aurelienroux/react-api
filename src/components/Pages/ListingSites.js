import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Avatar } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReactPaginate from "react-paginate";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  const [itemCount, setItemCount] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);

  useEffect(() => {
    fetch(
      `https://tracktik-challenge.staffr.com/sites?_page=${actualPage}&_limit=${itemPerPage}`
    )
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false));

    return () => console.log("unmounting...");
  }, [actualPage, itemPerPage]);

  useEffect(() => {
    fetch(`https://tracktik-challenge.staffr.com/sites`)
      .then(response => response.json())
      .then(data => setItemCount(data.length))
      .then(() => setPageCount(Math.floor(itemCount / itemPerPage)));

    return () => console.log("unmounting...");
  });

  const handlePageClick = e => {
    setActualPage(e.selected + 1);
  };

  const onItemPerPageChange = e => {
    setItemPerPage(e.target.value);
  };

  return (
    <Container maxWidth="md" className="container listing-sites">
      <h1 className="title">Sites</h1>
      {loading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="pagination-options">
            <span>Items per page</span>
            <FormControl className={classes.formControl}>
              <Select value={itemPerPage} onChange={onItemPerPageChange}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
          </div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
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
