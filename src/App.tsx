import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Navbar from "./components/Navbar";
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="app" data-theme="dark">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
