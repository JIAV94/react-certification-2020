import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header.component';

test('Render header elements', () => {
  render(<Header />);

  const navbar = screen.getByTestId('navbar');
  const leftElements = screen.getByTestId('leftElements');
  const hamburgerButton = screen.getByTestId('hamburgerButton');
  const hamburgerIcon = screen.getByTestId('hamburgerIcon');
  const searchIcon = screen.getByTestId('searchIcon');
  const searchInput = screen.getByTestId('searchInput');
  const rightElements = screen.getByTestId('rightElements');
  const darkModeSwitch = screen.getByTestId('darkModeSwitch');
  const loginButton = screen.getByTestId('loginButton');
  const personIcon = screen.getByTestId('personIcon');

  expect(navbar).toBeInTheDocument();
  expect(leftElements).toBeInTheDocument();
  expect(hamburgerButton).toBeInTheDocument();
  expect(hamburgerIcon).toBeInTheDocument();
  expect(searchIcon).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(rightElements).toBeInTheDocument();
  expect(darkModeSwitch).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(personIcon).toBeInTheDocument();
});
