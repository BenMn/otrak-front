/* eslint-disable react/prefer-stateless-function */

// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Local imports
import Filter from 'src/components/Homepage/Filter';
import SearchResult from 'src/components/Homepage/SearchResult';
import Aired from 'src/components/Homepage/Aired';
import Next from 'src/components/Homepage/Next';

// CSS Local Styling
import './homepage.scss';


class Homepage extends React.Component {
  componentDidMount() {
    // On load, get the last trendings
    // if the user is logged and has followings shows,
    // Get the next episodes to watch
    const { getTrending, getNext } = this.props;
    getTrending();
    getNext();
  }

  render() {
    const {
      // Search handlers
      searchInputValue,
      storeSearchInputResult,
      // Shows infos
      trendingList,
      getDetailShow,
      nextList,
      // Filters
      sortBy,
    } = this.props;
    return (
      <div id="HomePage-container">
        {/* Search + Drawer filter */}
        <Filter sortBy={sortBy} />
        {(storeSearchInputResult.length > 0) === true && (

        <SearchResult
          storeSearchInputResult={storeSearchInputResult}
          searchInputValue={searchInputValue}
          getDetailShow={getDetailShow}
        />
        )}

        {/* Just Aired */}
        <Aired
          trendingList={trendingList}
          getDetailShow={getDetailShow}
        />

        {/* Next to Watch */}
        {(nextList.length > 0) === true && (
          <Next
            nextList={nextList}
            getDetailShow={getDetailShow}
          />
        )}
      </div>
    );
  }
}

Homepage.propTypes = {
  // Search
  storeSearchInputResult: PropTypes.array,
  searchInputValue: PropTypes.string.isRequired,
  // Trending
  getTrending: PropTypes.func.isRequired,
  trendingList: PropTypes.array.isRequired,
  // Next
  getNext: PropTypes.func.isRequired,
  nextList: PropTypes.array.isRequired,
  // Show details
  getDetailShow: PropTypes.func.isRequired,
  // Sort By
  sortBy: PropTypes.func.isRequired,
};

Homepage.defaultProps = {
  storeSearchInputResult: [],
};

export default Homepage;
