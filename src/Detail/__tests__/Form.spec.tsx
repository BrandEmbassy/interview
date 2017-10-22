import Form from '../components/Form';
import render from '../../test/render';

[
  {
    editMode: false,
    values: { name: '', bio: '', tel: '', email: '' },
  },
  {
    editMode: true,
    values: { name: '', bio: '', tel: '', email: '' },
  },
  {
    editMode: true,
    values: { name: 'fdsf', bio: 'fds', tel: '432', email: 'fds@fdsf.sdf' },
  },
].forEach(props => {
  it(`should render Detail - ${JSON.stringify(props, null, 2)}`, () => {
    const Comp = Form('1', () => {})(props);
    expect(render(Comp)).toMatchSnapshot();
  });
});
