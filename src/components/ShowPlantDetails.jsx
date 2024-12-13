import { useLocation } from "react-router-dom";
import styled from "styled-components";

const DetailsContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
  max-width: 600px;
  margin: 20px auto;
`;

const PlantImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin-top: 10px;
`;

function ShowPlantDetails() {
  const location = useLocation();
  const { plant } = location.state || {};

  if (!plant) {
    return <p>No plant details available. Please select a plant first.</p>;
  }

  return (
    <DetailsContainer>
      <h2>Details for {plant.name}</h2>
      <table>
        <tbody>
          <tr>
            <th>Plant Type</th>
            <td>{plant.planttype}</td>
          </tr>
          <tr>
            <th>Max Height</th>
            <td>{plant.maxheight} cm</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>${plant.price}</td>
          </tr>
          <tr>
            <th>Image</th>
            <td>
              {plant.image ? (
                <PlantImage src={plant.image} alt={plant.name} />
              ) : (
                "No image available"
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <button>ADD TO BASKET</button>
    </DetailsContainer>
  );
}

export default ShowPlantDetails;
