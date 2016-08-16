import Helmet from 'react-helmet';
import React, { Component } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';

export default class HomePage extends Component {

  render() {
    return (
      <div className="detail">
        <FormattedMessage {...linksMessages.home}>
          {message =>
            <Helmet title={message} />
          }
        </FormattedMessage>
      </div>
    );
  }

}
