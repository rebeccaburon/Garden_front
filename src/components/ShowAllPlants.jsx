import { useOutletContext } from "react-router-dom";

function ShowAllPlants() {

 const {plants} = useOutletContext();

    return (
      <>
         <div>
      <table>
        <thead>
          <tr>
            <th>Plant type</th>
            <th>Name </th>
            <th>Max height </th>
            <th>price </th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant) => (
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
    )
  }
  
  export default ShowAllPlants