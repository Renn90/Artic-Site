import "./App.css";
import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
const Alps = React.lazy(() => import( "./pages/Alps"));
const Canada = React.lazy(() => import( "./pages/Canada"));
const Japan = React.lazy(() => import( "./pages/Japan"));
const ImgCard = React.lazy(() => import( "./components/ImgCard"));
const Form = React.lazy(() => import( "./pages/Form"));
const MoreCountries = React.lazy(() => import("./pages/MoreCountries"));
const MoreLodging = React.lazy(() => import( "./pages/MoreLodging"));


function App() {
  
  return (
    <div className="body">
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/alps" element={<Suspense fallback={<div>...</div>}><Alps /></Suspense>}/>
       <Route path="/canada" element={<Suspense fallback={<div>...</div>}><Canada/></Suspense>}/>
       <Route path="/japan" element={<Suspense fallback={<div>...</div>}><Japan /></Suspense>}/>
       <Route path="/more" element={<Suspense fallback={<div>...</div>}><MoreCountries /></Suspense>}/>
       <Route path="/img" element={<Suspense fallback={<div>...</div>}><ImgCard /></Suspense>}/>
       <Route path="/form" element={<Suspense fallback={<div>...</div>}><Form/></Suspense>}/>
       <Route path="/moreLodging" element={<Suspense fallback={<div>...</div>}><MoreLodging/></Suspense>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
