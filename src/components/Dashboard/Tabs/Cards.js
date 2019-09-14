/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

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

// Data provisoire
import shows from 'src/data/shows';

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


class Next extends React.Component {
  displayCardActionButtons = (event) => {
    event.persist();
    const parentIconElement = event.target.parentElement.parentElement;
    const hiddenIcons = parentIconElement.getElementsByClassName('hiddenCardIcon');
    for (let i = 0; i < hiddenIcons.length; i++) {
      hiddenIcons[i].style.display = 'block';
    }
  }

  render() {
    return (
      <Grid
        container
        justify="center"
      >
        {shows.map((show) => (
          <Grid item key={show.title} xl={2} lg={3} md={4} xs={6}>
            <HomePageCard key={show.title}>
              <CardActionArea>
                <HomePageCardMedia
                  image={show.image}
                  title={show.title}
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
                      {show.title}
                    </HomePageCardTitle>
                    <AiredSubtitleSeasonEpisode>EXX SXX</AiredSubtitleSeasonEpisode>
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
Next.propTypes = {

};

export default Next;
