// Import NPM
import React from 'react';
import PropTypes from 'prop-types';

// Local Imports
import HeadScreen from 'src/components/LandingPage/HeadScreen';
import ApiInfos from 'src/components/LandingPage/ApiInfos';
import ManageShows from 'src/components/LandingPage/ManageShows';
import Trending from 'src/components/LandingPage/Trending';
import StartToday from 'src/components/LandingPage/StartToday';

// CSS Local Styling
import './LandingPage.scss';


class LandingPage extends React.Component {
  // Fetch all the trendings shows when page load
  componentDidMount() {
    const { getTrending } = this.props;
    getTrending();
  }

  render() {
    const {
      // Search handlers
      searchInputValue,
      handleSearchInput,
      handleSearchInputSubmit,
      // Show infos
      trendingList,
      getDetailShow,
      // Modal
      handleOpen,
      // Loader
      loading,
    } = this.props;
    return (
      <>
        {/* "Track the owl" */}
        <HeadScreen
          handleOpen={handleOpen}
          searchInputValue={searchInputValue}
          handleSearchInput={handleSearchInput}
          handleSearchInputSubmit={handleSearchInputSubmit}
          loading={loading}
        />

        {/* "Your choice is ours" */}
        <ApiInfos
          searchInputValue={searchInputValue}
          handleSearchInput={handleSearchInput}
          handleSearchInputSubmit={handleSearchInputSubmit}
          loading={loading}
        />

        {/* "Manage easily you shows" */}
        <ManageShows />

        {/* "Just Aired" */}
        <Trending trendingList={trendingList} getDetailShow={getDetailShow} />

        {/* "Start today" (create account) */}
        <StartToday handleOpen={handleOpen} />

      </>
    );
  }
}

LandingPage.propTypes = {
  // Search handlers
  searchInputValue: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  handleSearchInputSubmit: PropTypes.func.isRequired,
  // Show infos
  getDetailShow: PropTypes.func.isRequired,
  getTrending: PropTypes.func.isRequired,
  trendingList: PropTypes.array.isRequired,
  // Modal
  handleOpen: PropTypes.func.isRequired,
  // Loader
  loading: PropTypes.bool.isRequired,
};

export default LandingPage;
