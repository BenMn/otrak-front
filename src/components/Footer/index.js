import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="Avatar Otrak" src="/static/images/avatar/1.jpg" />
          <Typography variant="h6">
            Track all your favorites shows
          </Typography>
          <Button color="inherit">REGISTER NOW !</Button>
          <Button color="inherit">TEAM</Button>
          <Button color="inherit">LEGAL</Button>
          <Button color="inherit">CONTACT</Button>
          <FontAwesomeIcon icon={faGithub} />

        </Toolbar>
      </AppBar>
    </div>
  );
}
