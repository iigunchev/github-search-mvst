import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders the search bar on the homepage', () => {
    render(<Home />);

    const placeholder = screen.getByRole('search');

    expect(placeholder).toBeInTheDocument();
  });
});
