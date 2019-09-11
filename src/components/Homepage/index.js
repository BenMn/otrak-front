/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import {

} from '@material-ui/core';

import './homepage.scss';


import Filter from './Filter';
import SearchResult from './SearchResult';
import Aired from './Aired';
import Next from './Next';


class Homepage extends React.Component {
  componentDidMount() {
    const { getTrending } = this.props;
    getTrending();
  }

  render() {
    const { storeInputResult, inputValue, trendingList } = this.props;
    return (
      <>
        <Filter />
        <SearchResult storeInputResult={storeInputResult} inputValue={inputValue} />
        <Aired trendingList={trendingList} />
        <Next />
      </>
    );
  }
}

Homepage.propTypes = {
  storeInputResult: PropTypes.array.isRequired,
  inputValue: PropTypes.string.isRequired,
  trendingList: PropTypes.array.isRequired,
  getTrending: PropTypes.func.isRequired,
};

export default Homepage;
