import * as React from 'react';
import Connect from '../state/Connect';
import { select } from './state';
import Form from './components/Form';

interface Props {
  match: {
    params: { id: string };
  };
  history: { replace: (path: string) => void };
}

const Detail: React.SFC<Props> = ({ history: { replace }, match: { params: { id } } }) => {
  return (
    <Connect select={select} data={{ id }}>
      {Form(id, replace)}
    </Connect>
  );
};

export default Detail;
