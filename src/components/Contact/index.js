import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  componentDidMount() {
    const { emptySearchResults } = this.props;
    emptySearchResults();
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
