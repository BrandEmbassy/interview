import * as React from 'react';
import { Route } from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import './App.css';

class App extends React.Component {
  state: { error: boolean } = { error: false };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    return (
      <div className="app">
        {this.state.error ? (
          <h1>Error..</h1>
        ) : (
          [
            <Route key={1} path="/" component={List} />,
            <Route key={2} path="/contact/:id" component={Detail} />,
          ]
        )}
      </div>
    );
  }
}

export default App;
