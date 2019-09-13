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

  componentDidUpdate() {
    const { showSwiper } = this.props;
    showSwiper();
  }

  render() {
    const {
      storeSearchInputResult,
      searchInputValue,
      trendingList,
      getDetailShow,
      showSwiper,
    } = this.props;
    return (
      <>
        <Filter />
        <SearchResult
          storeSearchInputResult={storeSearchInputResult}
          searchInputValue={searchInputValue}
        />
        <Aired
          trendingList={trendingList}
          getDetailShow={getDetailShow}
          showSwiper={showSwiper}
        />
        <Next />
      </>
    );
  }
}

Homepage.propTypes = {
  storeSearchInputResult: PropTypes.array,
  searchInputValue: PropTypes.string.isRequired,
  trendingList: PropTypes.array.isRequired,
  getTrending: PropTypes.func.isRequired,
  getDetailShow: PropTypes.func.isRequired,
  showSwiper: PropTypes.func.isRequired,
};

Homepage.defaultProps = {
  storeSearchInputResult: [],
};
export default Homepage;
