/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// scss
import 'react-id-swiper/lib/styles/scss/swiper.scss';
// css
import 'react-id-swiper/lib/styles/css/swiper.css';

// import PropTypes from 'prop-types';
import {
  Grid,
  CardActionArea,
} from '@material-ui/core';

// Icons


// ComponentIconButtons

import {
  HomePageCard,
  HomePageCardMedia,
  HomePageIconContainer,
  HomePageCardIcon,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';


class Cards extends React.Component {
  displayCardActionButtons = (event) => {
    event.persist();
    const parentIconElement = event.target.parentElement.parentElement;
    const hiddenIcons = parentIconElement.getElementsByClassName('hiddenCardIcon');
    for (let i = 0; i < hiddenIcons.length; i++) {
      hiddenIcons[i].style.display = 'block';
    }
  }

  render() {
    const { userFollowings } = this.props;
    console.log(userFollowings, '<<<<<<<<<<<<<<<<<<<< userFollowings');
    return (
      <Grid
        container
        justify="center"
      >
        {userFollowings.map((show) => (
          <Grid item key={show.tvShow.name} xl={2} lg={3} md={4} sm={6} xs={12}>
            <HomePageCard key={show.tvShow.name}>
              <CardActionArea>
                <HomePageCardMedia
                  image={show.tvShow.poster}
                  title={show.tvShow.name}
                >
                  <Grid
                    container
                    justify="flex-end"
                  >
                    <HomePageIconContainer className="hiddenCardIcon">
                      <AddCircleIcon />
                    </HomePageIconContainer>
                    <HomePageIconContainer className="hiddenCardIcon">
                      <VisibilityIcon />
                    </HomePageIconContainer>
                    <HomePageIconContainer className="hiddenCardIcon">
                      <CreateIcon />
                    </HomePageIconContainer>
                    <HomePageIconContainer className="hiddenCardIcon">
                      <StarIcon />
                    </HomePageIconContainer>
                    <HomePageIconContainer className="hiddenCardIcon">
                      <DeleteForeverIcon />
                    </HomePageIconContainer>
                    <HomePageIconContainer onClick={this.displayCardActionButtons}>
                      <HomePageCardIcon onClick={this.displayCardActionButtons} />
                    </HomePageIconContainer>
                  </Grid>

                  <AiredTitleCardAndSubtitle
                    container
                    direction="row"
                    justify="flex-end"
                  >
                    <HomePageCardTitle variant="h5" component="h2">
                      {show.tvShow.name}
                    </HomePageCardTitle>
                    {show.tvShow.genre.length}
                    <AiredSubtitleSeasonEpisode>
                      {show.tvShow.genre.map((genre) => (
                        <>
                          {genre.name}
                          &nbsp;
                        </>
                      ))}
                    </AiredSubtitleSeasonEpisode>
                  </AiredTitleCardAndSubtitle>
                </HomePageCardMedia>
              </CardActionArea>
            </HomePageCard>
          </Grid>
        ))}
      </Grid>
    );
  }
}

Cards.propTypes = {
  userFollowings: PropTypes.array,
};

Cards.defaultProps = {
  userFollowings: [],
};


export default Cards;
