const URL = "https://codebyburon.dk/api";

function handleHttpErrors(res) {
  if (!res.ok) {
    return res.json().then((fullError) => {
      throw { status: res.status, fullError };
    });
  }
  return res.json();
}

function apiFacade() {
  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

 const loggedIn = () => getToken() != null;

  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (username, password) => {
    const options = makeOptions("POST", false, {
      username: username,
      password: password,
    });

    return fetch(`${URL}/auth/login`, options)
      .then(handleHttpErrors)
      .then((res) => {
        if (!res.token) {
          throw new Error("Token not returned from login response");
        }
        setToken(res.token);
      });
  };

  const fetchData = () => {
    const options = makeOptions("GET", true);
    return fetch(`${URL}/plants`, options).then(handleHttpErrors);
  };

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
    login,
    fetchData,
    setToken,
    getToken,
    loggedIn,
    logout,
  };
}
const facade = apiFacade();
export default facade;
