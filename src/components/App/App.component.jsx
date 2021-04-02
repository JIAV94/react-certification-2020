import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import Header from '../Header';
import Details from '../../pages/Details'
import { random } from '../../utils/fns';
import { YoutubeContext } from '../../providers/Youtube'

function App() {
  const [videoData, setVideoData] = useState({});
  const [queryString, setQueryString] = useState('wizeline');

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <YoutubeContext.Provider value={{
          video:[videoData, setVideoData],
          query: [queryString, setQueryString]
        }}>
          <Header />
          <Layout>
            <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/:videoId">
                  <Details />
                </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </YoutubeContext.Provider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
