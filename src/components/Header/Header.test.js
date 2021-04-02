import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';
import { YoutubeContext } from '../../providers/Youtube';

test('Render header elements', () => {
  render(
    <YoutubeContext.Provider
      value={{
        video: [videoData, setVideoData],
        query: [queryString, setQueryString],
      }}
    >
      <Header />
    </YoutubeContext.Provider>
  );

  const navbar = screen.getByTestId('navbar');
  const hamburgerButton = screen.getByTestId('hamburgerButton');
  const hamburgerIcon = screen.getByTestId('hamburgerIcon');
  const searchIcon = screen.getByTestId('searchIcon');
  const searchInput = screen.getByPlaceholderText(/search\.\.\./i);
  const rightElements = screen.getByTestId('rightElements');
  const darkModeSwitch = screen.getByRole('checkbox', { name: /dark mode/i });
  const loginButton = screen.getByTestId('loginButton');
  const personIcon = screen.getByTestId('personIcon');

  expect(navbar).toBeInTheDocument();
  expect(hamburgerButton).toBeInTheDocument();
  expect(hamburgerIcon).toBeInTheDocument();
  expect(searchIcon).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(rightElements).toBeInTheDocument();
  expect(darkModeSwitch).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(personIcon).toBeInTheDocument();
});
