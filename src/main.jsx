import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx'
import Plants from './pages/Plants.jsx'
import PlantsSortedByType from './pages/PlantsSortedByType.jsx'
import Login from './login_logout/Login.jsx'
import Resellers from './pages/Resellers.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/plants" element={<Plants/>} />
      <Route path="/resellers" element={<Resellers/>} />
      <Route path="/plantssorted" element={<PlantsSortedByType />} />
      <Route path='/login' element={<Login/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);