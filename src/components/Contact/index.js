// Import NPM
import React from 'react';
import PropTypes from 'prop-types';


function scroolToTop() {
  window.scrollTo(0, 0);
}

class Contact extends React.Component {

  componentDidMount() {
    const { emptySearchResults } = this.props;
    emptySearchResults();
    scroolToTop();
  }

  render() {
    return (
      <h1>CONTACTS</h1>
    );
  }
}

Contact.propTypes = {
  emptySearchResults: PropTypes.func.isRequired,
};

export default Contact;
