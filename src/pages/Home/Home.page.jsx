import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { items } from '../../mockData/youtube-videos-mock.json'
import './Home.styles.css';
import styled from 'styled-components'

const Videos = styled.div`
margin-top: 15px;
margin-left: 5%;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
width:90%;
`

const Card = styled.div`
width:30%;
`

const Image = styled.img`
max-width:100%;
max-height:100%;
`

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
          < Videos >
            {items.map((item)=>(
              <Card key={`${item.snippet.publishedAt}${item.snippet.title}`}>
                <Image src={item.snippet.thumbnails.medium.url} />
                <p>{item.snippet.title}</p>
              </Card>
            ))}
          </ Videos>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
        )}
    </section>
  );
}

export default HomePage;
