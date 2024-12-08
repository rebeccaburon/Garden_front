import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "./util/persistence";
import { useNavigate } from "react-router-dom";
import facade from "./util/apiFacade.js";
import Header from "./components/Header.jsx";
import "./App.css";

function BreadCrumbs() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumbs">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {segments.map((segment, index) => {
          const path = `/${segments.slice(0, index + 1).join("/")}`;
          return (
            <li key={path}>
              <Link to={path}>
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
function App(login) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();

  // const APIURL = "";

  //Fetch data
  //const getAllPlatns = (callback) => {
//    fetchData(APIURL, callback);
 // };

 // useEffect(() => {
 //   getAllPlatns((data) => setPlants(data));
 // }, []);

  //Fetch token
  useEffect(() => {
    const token = facade.getToken();

    if (token) {
      const decodeToken = JSON.parse(atob(token.split(".")[1]));
      setUserRole(decodeToken.roles || "");
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = async (user, pass) => {
    await facade.login(user, pass); // Perform login via apiFacade
    const token = facade.getToken();
    const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode the JWT payload
    const role = decodedToken.roles;

    setLoggedIn(true);
    setUsername(user);
    setUserRole(role);

    // Navigate based on role
    if (role.includes("admin")) {
      navigate("/plants");
    } else if (role.includes("user")) {
      navigate("/");
    } else {
      navigate("/"); // Fallback if no specific role
    }
  };

  const handleLogout = () => {
    facade.logout();
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="container">
      <Header
        loggedIn={loggedIn}
        username={username}
        handleLogout={handleLogout}
      />
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/plants">Plants</NavLink>
            </li>
            <li>
              <NavLink to="/plantssorted">Plants Sorted By Type</NavLink>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <BreadCrumbs />
          <Outlet context={{ plants, handleLogin }} />
        </main>
      </div>
      <footer className="footer">
        {" "}
        <p>&copy; 2024 Garden Center A/S. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
