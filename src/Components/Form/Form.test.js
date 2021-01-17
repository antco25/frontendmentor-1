import render from 'react-test-renderer'
import Form from './Form'

it('renders correctly', () => {
  const tree = render
    .create(<Form />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
