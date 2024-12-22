import React from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import { Route, Routes, Router } from "react-router-dom";
import Authentication from "./Pages/Authentication";
function App() {
  return (
    <>
    

      <Routes>
        <Route path="/" element={  <Layout>
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
      </Layout>} />
        <Route
          path="/authentication"
          element={<Authentication/>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
