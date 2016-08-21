import './style.css';
import './custom.css';
import Sidebar from './Sidebar.react';
import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';
import favicon from '../../common/app/favicon';
import start from '../../common/app/start';
import { getContacts } from '../../common/contacts/actions';
import { connect } from 'react-redux';

// v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template
const bootstrap4Metas = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
  {
    'http-equiv': 'x-ua-compatible',
    content: 'ie=edge',
  },
];

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    currentLocale: PropTypes.string.isRequired,
    getContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getContacts } = this.props;
    getContacts();
  }

  render() {
    const { children, currentLocale } = this.props;

    return (
      <div className="container">
        <Helmet
          htmlAttributes={{ lang: currentLocale }}
          titleTemplate="%s - Este.js"
          meta={[
            ...bootstrap4Metas,
            ...favicon.meta,
          ]}
          link={[
            ...favicon.link,
          ]}
        />
        {/* Pass location to ensure header active links are updated. */}
        <Sidebar />
        {children}
      </div>
    );
  }

}

App = start(App);

export default connect(state => ({
  currentLocale: state.intl.currentLocale,
}), { getContacts })(App);
