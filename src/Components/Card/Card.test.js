import render from 'react-test-renderer'
import Card from './Card'

it('renders correctly', () => {
  const tree = render
    .create(<Card />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with type "default"', () => {
  const tree = render
    .create(<Card type="default" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with type "accent"', () => {
  const tree = render
    .create(<Card type="accent" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});