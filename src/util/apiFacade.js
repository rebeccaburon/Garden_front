const URL = "";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  
  
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password) => {
    //*TODO*/
    const options = makeOptions("POST", false, {
      username: user,
      password: password,
    });

    return fetch(URL + "/auth/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const fetchTrips = () => {
    const options = makeOptions('GET', true);
    
    return fetch(`${URL}/`, options)
    .then(handleHttpErrors);
  };

  const fetchGuides = () => {
    const options = makeOptions("GET", true);
    return fetch(`${URL}/guides`, options)
    .then(handleHttpErrors);
  };

  const fetchTripDetails = (id) => {
    const options = makeOptions("GET", true);
    return fetch(`${URL}/trips/${id}`, options)
    .then(handleHttpErrors);
  };

  const fetchData = () => {
    const options = makeOptions ('GET', true);
    return fetch(URL, options)
    .then(handleHttpErrors);
  }


  

  const makeOptions = (method, addToken, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchTrips,
    fetchGuides,
    fetchTripDetails,
    fetchData
    
  };
}
const facade = apiFacade();
export default facade;
