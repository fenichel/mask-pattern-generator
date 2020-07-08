import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders introduction at start', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Introduction/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toMatch(/a/i);
  expect(linkElement).toHaveClass('active');
});

test('renders measurement instruction nav element, but not active at start', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Measurement instructions/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toMatch(/a/i);
  expect(linkElement).not.toHaveClass('active');
});
