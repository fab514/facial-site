import React from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Header from "../Components/Header";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<Header />}>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
      <Route path="testimonials" element={<Testimonials />} />
    </Route>
  )
);
function ReactRouter() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default ReactRouter;
