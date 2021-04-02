import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { YoutubeContext } from '../../providers/Youtube';
import { useFetch } from '../../hooks/useFetch'

const Player = styled.iframe`
  width: 100%;
  height: 500px;
  left: 0px;
  top: 65px;
`
const Wrapper = styled.div`
  display:flex;
  width:100%;
`
const Video = styled.div`
  flex-basis:70%;
  padding-left: 5px;
`
const RelatedVideos = styled.div`
  flex-basis:30%;
  padding-left: 5px;
`
const DetailsPage = () => {
  const { video } = useContext(YoutubeContext);
  const [ videoData, setVideoData ] = video;
  const { videoId } = useParams();

  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  const [videos, loading] = useFetch(false, videoId)
  return (
    <Wrapper>
      <Video>
        {videoData.snippet ?
          <>
            <Player src={url} allowfullscreen></Player>
            <p>{videoData.snippet.title}</p>
            <hr/>
            <a href={`https://www.youtube.com/channel/${videoData.snippet.channelId}`}>{videoData.snippet.channelTitle}</a>
            <p>{videoData.snippet.description}</p>
          </> 
          :
          <h2>Video Not Found</h2>
        }
      </Video>
      <RelatedVideos>
          {loading ? <p> Loading... </p> : videos.map((video) => (
            video.snippet !== undefined &&
            <div key={video.id.videoId}>
              <Link to={`/${video.id.videoId}`} onClick={() => {setVideoData(video)}}>
                <Wrapper>
                  <RelatedVideos>
                    <img src={video.snippet.thumbnails.default.url} alt=''/>
                  </RelatedVideos>
                  <Video>
                    <p>{video.snippet.title}</p>
                  </Video>
                </Wrapper>
              </Link>
              <hr />
            </div>
          ))}
      </RelatedVideos>
    </Wrapper>
  )
}

export default DetailsPage;