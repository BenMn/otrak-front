import React from 'react';
// import PropTypes from 'prop-types';
import {

} from '@material-ui/core';

import './homepage.scss';


import Filter from './Filter';
import SearchResult from './SearchResult';
import Aired from './Aired';
import Next from './Next';


class Homepage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <>
        <Filter />
        <SearchResult />
        <Aired />
        <Next />
      </>
    );
  }
}

Homepage.propTypes = {
};

export default Homepage;
