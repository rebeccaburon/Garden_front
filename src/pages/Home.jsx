import styled from "styled-components";

function Home() {
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
  `;

  const LogoImg = styled.img`
    
  ight: 190px;
    max-width: 250px;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  `;

  const AboutSection = styled.div`
    margin: 20px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
  `;

  const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  `;

  const GalleryImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
  `;

  return (
    <PageContainer>
      <h1>Welcome to Garden Center A/S</h1>
      <p>Providing the Best Garden Plants to Resellers</p>

      <LogoImg src="homepage.png" alt="Garden Center Logo" />

      <AboutSection>
        <h2>About Us</h2>
        <p>
          At Garden Center A/S, we connect plant lovers and resellers with a wide variety of garden plants.
          Our catalog includes roses, rhododendrons, shrubs, and more, with detailed information about type,
          size, and pricing. We’re committed to making quality plants accessible for everyone, whether you're
          a reseller or a passionate gardener.
        </p>
      </AboutSection>

      <h2>Gallery</h2>
      <Gallery>
        <GalleryImg src="busk.png" alt="Buske" />
        <GalleryImg src="frugt.png" alt="Frugt og grønsager" />
        <GalleryImg src="rose.png" alt="Rose" />
        <GalleryImg src="rhododendron.png" alt="Rhododendron" />
      </Gallery>
    </PageContainer>
  );
}

export default Home;
