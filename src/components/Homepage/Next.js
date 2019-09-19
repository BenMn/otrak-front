/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {
  Typography,
  Grid,
  CardActionArea,
  Container,
} from '@material-ui/core';

// Data provisoire
import shows from 'src/data/shows';

// import Material UI custom components
import {
  NextIconTitle,
  HomePageCard,
  HomePageCardMedia,
  NextBlockTitleSeeAll,
  NextSeeAllIcon,
  HomePageIconContainer,
  HomePageCardIcon,
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
  NextGridCurrentCard,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';

// Utils funtions
import { displayCardActionButtons } from 'src/utils';

const Next = ({ testClickCardMedia }) => (
  <>
    {/* Title */}
    <NextBlockTitleSeeAll
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <Typography variant="h3" className="title-icon-next-aired"><NextIconTitle /> Next To Watch</Typography>
      <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<NextSeeAllIcon /></a></Typography>
    </NextBlockTitleSeeAll>

    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {/* Single Card Show */}
        {shows.map((show) => (
          <NextGridCurrentCard item key={show.title}>
            <HomePageCard key={show.title} id="currentCard">
              <HomePageCardMedia
                image={show.image}
                title={show.title}
              >
                {/* Card icons */}
                <Grid
                  container
                  direction="row"
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
                  <HomePageIconContainer
                    onMouseOver={(event) => displayCardActionButtons(event)}
                  >
                    <HomePageCardIcon />
                  </HomePageIconContainer>
                </Grid>

                {/* Show title */}
                {/* <NavLink exact to={`/show/${currentShow.name}`}> */}
                <NavLink exact to="/show">
                  <CardActionArea>
                    <AiredTitleCardAndSubtitle
                      container
                      direction="row"
                      justify="flex-end"
                      onClick={() => testClickCardMedia()}
                    >
                      <HomePageCardTitle variant="h5" component="h2">
                        {show.title}
                      </HomePageCardTitle>
                      {/* Season + Episode */}
                      <AiredSubtitleSeasonEpisode>EXX SXX</AiredSubtitleSeasonEpisode>
                    </AiredTitleCardAndSubtitle>
                  </CardActionArea>
                </NavLink>
              </HomePageCardMedia>
            </HomePageCard>
          </NextGridCurrentCard>
        ))}
      </Grid>
    </Container>
  </>
);

Next.propTypes = {
  testClickCardMedia: PropTypes.func.isRequired,
};


export default Next;
