import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  let linkElement;
  
  beforeEach(() => {
    render(<App />);
    linkElement = screen.getByText(/learn react/i);
  });

  test('renders learn react link', () => {
    expect(linkElement).toBeInTheDocument();
  });

  test('link has correct href attribute', () => {
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
  });
});
