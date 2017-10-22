import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

export default function render(Component: React.ReactNode) {
  return renderer.create(<Router>{Component}</Router>).toJSON();
}
