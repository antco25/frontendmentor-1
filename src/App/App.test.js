import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders header', () => {
  render(<App />);
  const headerText = screen.getByText(/Learn to code by watching others/);
  expect(headerText).toBeInTheDocument();
});
