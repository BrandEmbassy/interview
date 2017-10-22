import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import * as cx from 'classnames';
import { Contact as ContactType } from '../../state/types';

interface ContactProps {
  contact: ContactType;
}

const Contact: React.SFC<ContactProps> = ({ contact: { id, name } }) => {
  return (
    <Route
      path={`/contact/${id}`}
      children={({ match }) => (
        <Link to={`/contact/${id}`}>
          <div className={cx('item', { 'item--active': !!match })}>
            <div className="in">
              <div className="profile-pic" />
              {name}
            </div>
          </div>
        </Link>
      )}
    />
  );
};

export default Contact;
