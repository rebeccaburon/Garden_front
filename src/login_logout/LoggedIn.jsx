import { useState, useEffect } from "react"
import facade from "../util/apiFacade"
import {  NavLink } from "react-router";

function LoggedIn() {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
       
    useEffect(() => { //*TODO* use the method  from facade (apiFace), and fetch the data from your database

      facade.fetchData().then(data=> setDataFromServer(data.msg));
    }, [])
 
    return (
      <NavLink to="/">Home</NavLink>
    )

  }
  export default LoggedIn