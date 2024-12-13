import { NavLink, useOutletContext } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

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

function ShowAllPlants() {
  const { plants } = useOutletContext();
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPlant, setSelectedPlant] = useState(null);

  const plantTypes = ["All", "Flower", "Rose", "Bush", "Rhododendron", "Herb"];

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

  return (
    <div>
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
    </div>
  );
}

export default ShowAllPlants;
