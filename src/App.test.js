import './matchMedia';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders salt', () => {
  render(<App />);
  const saltElement = screen.getByText(/Соль:/i);
  expect(saltElement).toBeInTheDocument();
});
