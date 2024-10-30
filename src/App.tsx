import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { AuthGuard } from "./lib/auth";
import BottomMenu from "./components/BottomMenu";
const Home = React.lazy(() => import("./pages/home/Home"));
const Form = React.lazy(() => import("./pages/form/Form"));
const Dashboard = React.lazy(() => import("./pages/dashboard/index"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <div className="app" data-theme="dark">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <BottomMenu />
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
