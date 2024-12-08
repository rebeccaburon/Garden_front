import { useOutletContext } from "react-router-dom";
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
function ShowSortedPlants() {
  const { plants } = useOutletContext();
  const [selectedType, setSelectedType] = useState("All");

  const plantTypes = [
    "All",
    "Flower",
    "Rose",
    "Bush",
    "Rhododendron",
    "Herb",
  ];

  const sortedPlants =
    selectedType == "All"
      ? plants
      : plants.filter((plant) => plant.planttype == selectedType);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
       
        <Select id="plantType" value={selectedType} onChange={handleChange}>
          {plantTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Plant Type</th>
              <th>Name</th>
              <th>Max Height</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlants.map((plant) => (
              <tr key={plant.id}>
                <td>{plant.planttype}</td>
                <td>{plant.name}</td>
                <td>{plant.maxheight}</td>
                <td>{plant.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ShowSortedPlants;
