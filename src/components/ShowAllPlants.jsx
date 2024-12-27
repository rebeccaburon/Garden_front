import { NavLink, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Select = styled.select`
  padding: 10px 15px;
  font-size: 1rem;
  color: #0c0c0c;
  background-color: #e6be8a;
  border: 1px solid #331f0a;
  border-radius: 6px;

  &:hover {
    background-color: #FF9999;
    color: #fff;
  }
`;
const DetailsContainer = styled.div`
  padding: 20px;
  align-content: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
  max-width: 600px;
  margin: 20px auto;
`;

const ErrorBanner = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  text-align: center;
`;

function ShowAllPlants() {
  const { plants } = useOutletContext();
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const navigate = useNavigate ();
  const plantTypes = ["All", "Flower", "Rose", "Bush", "Rhododendron", "Herb"];

   // Reset error message on route changes
   useEffect(() => {
    setErrorMessage(null);
  }, [location]);


  
  // Check if no plants are available
  useEffect(() => {
    if (!plants || plants.length === 0) {
      setErrorMessage("No plants in stock. Please try again later.");
    }
  }, [plants]);

  const sortedPlants =
    selectedType === "All"
      ? plants
      : plants.filter((plant) => plant.planttype === selectedType);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSelectPlant = (plant) => {
    setSelectedPlant(plant);
  };

  const handleClickBack = () => {
    navigate ("/")
  }

  return (
    <div>
      {errorMessage && (
        <ErrorBanner>
          <p>{errorMessage}</p>
        </ErrorBanner>
      )}

      {!errorMessage && (
        <>
      <div>
        <Select id="planttype" value={selectedType} onChange={handleChange}>
          {plantTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Plant Type</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlants.map((plant) => (
            <tr key={plant.id} onClick={() => handleSelectPlant(plant)}>
              <td>{plant.planttype}</td>
              <td>{plant.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPlant && (
        <DetailsContainer>
          <h3>Details for {selectedPlant.name}</h3>
          <div className="login-button ">
          <NavLink to="/plant" state={{ plant: selectedPlant }}>
            Show all details
          </NavLink>
          </div>
        </DetailsContainer>
      )}
      </>
    )}
    
      <div>
      <button className="login-button" onClick = {handleClickBack}>BACK </button>
      </div>
    </div>
  );
}

export default ShowAllPlants;
