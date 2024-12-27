import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const PageContainer = styled.div`
position: relative;
overflow: hidden;
height: 100vh; /* Ensure it covers the full screen height */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

  @media (max-width: 768px) {
  height: auto; /* Allow the container to grow on smaller screens */
  padding: 20px;
}
`;

const BackgroundVideo = styled.video`
position: absolute;

object-fit: cover; /* Ensure video covers the screen */
z-index: -1; /* Place behind content */
pointer-events: none; /* Prevent interaction with the video */
`;

const Gallery = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin-top: 20px;
`;

const GalleryImg = styled.img`
width: 200px;
height: 200px;
border-radius: 10px;
object-fit: cover;
transition: transform 0.3s ease, box-shadow 0.3s ease;
font-weight: bold;
&:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}
`;
const GalleryText = styled.span`
font-weight: bold; /* Make text bold */
color: #e6be8a; /* Make text black */
display: block; 
margin-top: 10px; /* Add spacing above text */
text-align: center; /* Center the text */
`;

function Home() {


  return (
    <>
      <PageContainer>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src="home-screen-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <h1>Welcome to Garden Center A/S</h1>
        <p>Providing the Best Garden Plants</p>
        <Gallery>
          <NavLink to="/plants">
            <GalleryImg src="homepage.png" alt="Buske" /> <br />
            <GalleryText>SEE PRODUCTS</GalleryText>
          </NavLink>
        </Gallery>
      </PageContainer>
    </>
  );
}

export default Home;
