import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Avatar } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SearchIcon from "@material-ui/icons/Search";

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
  const [pageCount, setPageCount] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  // fetch data for display
  useEffect(() => {
    fetch(
      `https://tracktik-challenge.staffr.com/sites?_page=${actualPage}&_limit=${itemPerPage}&q=${searchQuery}`
    )
      .then(response => response.json())
      .then(data => setData(data))
      .then(() => setLoading(false));

    // cleaning up effect
    return () => console.log("unmounting data for display...");
  }, [actualPage, itemPerPage, searchQuery]);

  // fetch data for pagination setup and search query
  useEffect(() => {
    fetch(
      `https://tracktik-challenge.staffr.com/sites${
        searchQuery ? `?q=${searchQuery}` : ""
      }`
    )
      .then(response => response.json())
      .then(data => setItemCount(data.length))
      .then(() => setPageCount(Math.floor(itemCount / itemPerPage)));

    // cleaning up effect
    return () => console.log("unmounting data for pagination...");
  });

  // pagination and search queryfunctions
  const handlePageClick = e => {
    setActualPage(e.selected + 1);
  };

  const onItemPerPageChange = e => {
    setItemPerPage(e.target.value);
  };

  const onSetSearchQuery = e => {
    setSearchQuery(e.target.value);
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
          <div className="sites-options">
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
            <div className="search-input">
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <SearchIcon />
                </Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label="Search..."
                    onChange={onSetSearchQuery}
                  />
                </Grid>
              </Grid>
            </div>
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
          {data.length > 0 ? (
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
                            {address.state}, {address.country},{" "}
                            {address.zipCode}
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
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default ListingSites;
