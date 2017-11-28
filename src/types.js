import PropTypes from 'prop-types';

export const ContactType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  phones: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  emails: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })),
});
