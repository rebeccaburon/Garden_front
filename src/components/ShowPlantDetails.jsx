import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const PlantImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  margin-top: 10px;
`;

function ShowPlantDetails() {
  const location = useLocation();
  const { plant } = location.state || {};
  const navigate = useNavigate ();
  

  if (!plant) {
    return <p>No plant details available. Please select a plant first.</p>;
  }

  const handleClickBack = () => {
    navigate("/plants")
  }

  return (
    <div>
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
        </tbody>
      </table>
      <button className="login-button" onClick={handleClickBack}>BACK</button>
    </div>
  );
}

export default ShowPlantDetails;
