/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import './homepage.scss';

// Imports locaux
import Filter from 'src/components/Homepage/Filter';
import SearchResult from 'src/components/Homepage/SearchResult';
import Aired from 'src/components/Homepage/Aired';
import Next from 'src/components/Homepage/Next';


class Homepage extends React.Component {
  componentDidMount() {
    const { getTrending, getNext } = this.props;
    getTrending();
    getNext();
  }

  render() {
    const {
      storeSearchInputResult,
      searchInputValue,
      trendingList,
      getDetailShow,
      sortBy,
      nextList,
    } = this.props;
    return (
      <>
        <Filter sortBy={sortBy} />
        {(storeSearchInputResult.length > 0) === true && (
        <SearchResult
          storeSearchInputResult={storeSearchInputResult}
          searchInputValue={searchInputValue}
          getDetailShow={getDetailShow}
        />
        )}
        <Aired
          trendingList={trendingList}
          getDetailShow={getDetailShow}
        />
        {(nextList.length > 0) === true && (
          <Next
            nextList={nextList}
            getDetailShow={getDetailShow}
          />
        )}
      </>
    );
  }
}

Homepage.propTypes = {
  storeSearchInputResult: PropTypes.array,
  searchInputValue: PropTypes.string.isRequired,
  trendingList: PropTypes.array.isRequired,
  nextList: PropTypes.array.isRequired,
  getTrending: PropTypes.func.isRequired,
  getDetailShow: PropTypes.func.isRequired,
  sortBy: PropTypes.func.isRequired,
  getNext: PropTypes.func.isRequired,
};

Homepage.defaultProps = {
  storeSearchInputResult: [],
};
export default Homepage;
