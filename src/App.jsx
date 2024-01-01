import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./Component/Home/myNavbar";
import Hero from "./Component/Home/Hero";
import FirstSection from "./Component/Home/FirstSection";
import SecondSection from "./Component/Home/SecondSection";

function App() {

  return (
    <>
    <MyNavbar />
    <Hero />
    <FirstSection />
    <SecondSection />
    </>
  )
}

export default App
