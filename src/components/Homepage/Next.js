/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { NavLink } from 'react-router-dom';

// Local Import
import Icons from 'src/containers/Icons';

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
  HomePageCardTitle,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
  NextGridCurrentCard,
} from 'src/styles/materialUi/materialUiStyles/HomePage';


const Next = () => (
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
              >
                {/* Card icons */}
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                >
                  <Icons showId={show.id} categorie="next" />
                </Grid>

                {/* Show title */}
                {/* <NavLink exact to={`/show/${currentShow.name}`}> */}
                <NavLink exact to="/show">
                  <CardActionArea>
                    <AiredTitleCardAndSubtitle
                      container
                      direction="row"
                      justify="flex-end"
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

export default Next;
