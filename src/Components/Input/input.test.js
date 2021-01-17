import render from 'react-test-renderer'
import Input from './Input'

it('renders correctly', () => {
  const tree = render
    .create(<Input/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with type="submit"', () => {
    const tree = render
      .create(<Input type="submit"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
