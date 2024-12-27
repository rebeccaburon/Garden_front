import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData} from "./util/persistence";
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
   const APIURL = "https://codebyburon.dk/api/plants";
 
 
 
 
 
  //Fetch data
  const getAllPlatns = (callback) => {
  fetchData(APIURL, callback);
  };

  useEffect(() => {
    getAllPlatns((data) => setPlants(data));
   }, []);



  //Fetch token
  useEffect(() => {
    const token = facade.getToken();

    if (token) {
      try{
      const decodeToken = JSON.parse(atob(token.split(".")[1]));
      setUserRole(decodeToken.roles || "");
      setLoggedIn(true);
      } catch (err){
        console.log("Invalid token:", err);
        facade.logout
        setLoggedIn(false)
      }
    }
  }, []);

  const handleLogin = async (user, pass) => {
  try{
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
    } catch(err){
      console.error("Login failed:", err.fullError || err);
      alert("Invalid login credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    facade.logout();
    setLoggedIn(false);
    setUsername("");
    setUserRole("");
    navigate("/");
  };

  return (
    <div >
      <Header
        loggedIn={loggedIn}
        username={username}
        handleLogout={handleLogout}
      />
      <div className="container">
        <main>
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
