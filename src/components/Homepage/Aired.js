/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

// Slider library
import Slider from 'react-slick';

// Slider css style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Material UI components
import {
  Typography,
  Grid,
  CardActionArea,
  Container,
} from '@material-ui/core';

// import Material UI custom components
import {
  AiredIconTitle,
  HomePageCard,
  HomePageCardMedia,
  HomePageIconContainer,
  HomePageCardTitle,
  AiredBlockTitleSeeAll,
  HomePageCardIcon,
  AiredSeeAllIcon,
  AiredSubtitleSeasonEpisode,
  AiredTitleCardAndSubtitle,
} from 'src/styles/materialUi/materialUiStyles/HomePage';

// import Material UI Icons
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import StarIcon from '@material-ui/icons/Star';

// Micro component managing arrow's style
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#212121',
        borderRadius: 25,
      }}
      onClick={onClick}
    />
  );
}
// Micro component managing arrow's style
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '#212121',
        borderRadius: 25,
      }}
      onClick={onClick}
    />
  );
}

class Aired extends React.Component {
  // Opens card icons menu
  displayCardActionButtons = (event) => {
    event.persist();
    const parentIconElement = event.target.parentElement.parentElement;
    const hiddenIcons = parentIconElement.getElementsByClassName('hiddenCardIcon');
    for (let i = 0; i < hiddenIcons.length; i++) {
      hiddenIcons[i].style.display = 'block';
    }
  };

  render() {
    const { trendingList, getDetailShow } = this.props;

    // Setting of Slider component
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <>
        <AiredBlockTitleSeeAll
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Typography variant="h3" component="p" className="title-icon-next-aired"><AiredIconTitle /> Just Aired</Typography>
          <Typography variant="h6"><a href="." className="see-all-next-aired"> See all<AiredSeeAllIcon /></a></Typography>
        </AiredBlockTitleSeeAll>
        <Container>
          <Slider {...settings}>
            {trendingList.map((currentShow) => (
              <Grid item key={currentShow.id_tvmaze}>
                <HomePageCard>
                  <CardActionArea onClick={() => getDetailShow(currentShow.show_id_tvmaze)}>
                    <HomePageCardMedia
                      image={currentShow.poster}
                      title={currentShow.show_name}
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
                          {currentShow.show_name}
                        </HomePageCardTitle>
                        <AiredSubtitleSeasonEpisode> S{currentShow.season} E{currentShow.number}</AiredSubtitleSeasonEpisode>
                      </AiredTitleCardAndSubtitle>
                    </HomePageCardMedia>
                  </CardActionArea>
                </HomePageCard>
              </Grid>
            ))}
          </Slider>
        </Container>
      </>
    );
  }
}

Aired.propTypes = {
  trendingList: PropTypes.array.isRequired,
  getDetailShow: PropTypes.func.isRequired,

};

export default Aired;
