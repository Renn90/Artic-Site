import "./App.css";
import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ImgCard from "./components/ImgCard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Alps from "./pages/Alps";
import Home from "./pages/Home";
import Canada from "./pages/Canada"
import Japan from "./pages/Japan"
import MoreCountries from "./pages/MoreCountries";
import Form from "./pages/Form";
import MoreLodging from "./pages/MoreLodging";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="body">
      <NavBar/>
      <Suspense fallback={<div>...</div>}>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/alps" element={<Alps />}/>
       <Route path="/canada" element={<Canada/>}/>
       <Route path="/japan" element={<Japan />}/>
       <Route path="/more" element={<MoreCountries />}/>
       <Route path="/img" element={<ImgCard />}/>
       <Route path="/form" element={<Form/>}/>
       <Route path="/moreLodging" element={<MoreLodging/>}/>
      </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
