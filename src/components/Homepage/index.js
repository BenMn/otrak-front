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
    const { getTrending } = this.props;
    getTrending();
  }

  render() {
    const {
      storeSearchInputResult,
      searchInputValue,
      trendingList,
      getDetailShow,
      sortBy,
      testClickCardMedia,
    } = this.props;
    return (
      <>
        <Filter sortBy={sortBy} />
        {(storeSearchInputResult.length > 0) === true && (
        <SearchResult
          storeSearchInputResult={storeSearchInputResult}
          searchInputValue={searchInputValue}
          getDetailShow={getDetailShow}
          testClickCardMedia={testClickCardMedia}
        />
        )}
        <Aired
          trendingList={trendingList}
          getDetailShow={getDetailShow}
          testClickCardMedia={testClickCardMedia}
        />
        <Next testClickCardMedia={testClickCardMedia} />
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
  sortBy: PropTypes.func.isRequired,
  testClickCardMedia: PropTypes.func.isRequired,
};

Homepage.defaultProps = {
  storeSearchInputResult: [],
};
export default Homepage;
