import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import styled from 'styled-components'
import { useFetch } from '../../hooks/useFetch'
import { YoutubeContext } from '../../providers/Youtube';

const Videos = styled.div`
margin-top: 15px;
margin-left: 5%;
display:flex;
flex-wrap: wrap;
justify-content: space-around;
width:90%;
`

const Card = styled.div`
width:345px;
background-color: lightgray;
box-shadow: 1px 1px 0px 0px gray;
border-radius: 5px;
overflow:hidden; 
padding-top: 3px;
margin:5px;
`

const Image = styled.img`
max-width:100%;
max-height:100%;
`

function HomePage() {
  const { video, query } = useContext(YoutubeContext);
  const [ , setVideoData ] = video;
  const [ queryString ] = query;

  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  const [videos, loading] = useFetch(queryString)

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
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
      {loading 
        ? <div>Loading...</div> 
        : <Videos>
            {videos.map((item)=>(
              <Card key={`${item.snippet.publishedAt}${item.snippet.title}`}>
                <Link to={`/${item.id.videoId}`} onClick={() => {setVideoData(item)}}>
                  <Image src={item.snippet.thumbnails.medium.url} />
                  <p>{item.snippet.title}</p>
                </Link>
              </Card>
            ))}
          </ Videos>
      }
    </section>
  );
}

export default HomePage;
