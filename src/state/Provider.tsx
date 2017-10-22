import * as React from 'react';
import * as PT from 'prop-types';
import { Observable } from 'rxjs/Observable';

interface PropTypes {
  children: JSX.Element;
  state$: Observable<any>; // tslint:disable-line no-any
}

class Provider extends React.Component<PropTypes> {
  static childContextTypes = {
    state$: PT.object.isRequired,
  };

  getChildContext() {
    return { state$: this.props.state$ };
  }
  render() {
    return this.props.children;
  }
}

export default Provider;
