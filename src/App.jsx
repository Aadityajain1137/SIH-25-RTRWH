import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Types from "./components/Types";
import Storage from "./components/Storage";
import Recharge from "./components/Recharge";
import Combination from "./components/Combination";
import "./App.css";
import Footer from "./components/Footer";
import LeagueSection from "./components/LeagueSection";
import FormPage from "./components/FormPage";
import CheckWaterPage from "./components/CheckWaterPage";
import FormLevel from "./components/formLevel";
import FormHarvest from "./components/formHarvest";
import ProjectionChart from "./components/FinancialProjection";
import Benefits from "./components/Benefits";
import EnvironmentalStats from "./components/EnvironmentalStats.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import GovSchemes from "./components/GovSchemes.jsx";
export default function App() {
  const [result, setResult] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              
              <div className="form-cards">
                <FormHarvest />
                <FormLevel />
                <LeagueSection />
              </div>
              <GovSchemes></GovSchemes>
              <ProjectionChart />
              <Types />
              <Benefits></Benefits>
              <EnvironmentalStats></EnvironmentalStats>
              <SuccessStories></SuccessStories>
              <Footer />
            </>
          }
        />
        <Route path="/storage" element={<Storage />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/combination" element={<Combination />} />
        <Route path="/estimator" element={<FormPage />} />
        <Route path="/check-water" element={<CheckWaterPage />} />
      </Routes>
    </Router>
  );
}
