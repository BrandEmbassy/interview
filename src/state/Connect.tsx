import * as React from 'react';
import * as PT from 'prop-types';
import { Subscription } from 'rxjs/Subscription';
import { State } from './types';

type Actions = {};
interface ConnectProps {
  children: (state?: {}, actions?: Actions) => JSX.Element;
  select?: (state: State, data?: {}) => {};
  data?: {};
}

class Connect extends React.Component<ConnectProps> {
  static contextTypes = {
    state$: PT.object,
  };
  state: State;
  subscription?: Subscription;

  componentWillMount() {
    if (this.context.state$) {
      this.subscription = this.context.state$.subscribe((state: State) =>
        this.setState(() => state)
      );
    }
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  render() {
    const { select, data } = this.props;
    const state = select ? select(this.state, data) : this.state;
    return this.props.children(state);
  }
}

export default Connect;
