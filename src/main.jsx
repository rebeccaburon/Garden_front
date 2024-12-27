import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx'
import Plants from './pages/Plants.jsx'
import Plant from './pages/Plant.jsx'
import Login from './login_logout/Login.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/plants" element={<Plants/>} />
      <Route path="/plant" element={<Plant/>} />
      <Route path='/login' element={<Login/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);