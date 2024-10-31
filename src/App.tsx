import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import { Analytics } from "@vercel/analytics/react";
import BottomMenu from "./layout/BottomMenu";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
const Home = React.lazy(() => import("./pages/home/Home"));
const Form = React.lazy(() => import("./pages/form/Form"));
const Dashboard = React.lazy(() => import("./pages/dashboard/index"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <div className="app" data-theme="dark">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<RootLayout><Home /></RootLayout>} />
            <Route path="/form" element={<RootLayout><Form /></RootLayout>} />
            <Route path="/dashboard" element={<AuthLayout><Dashboard /></AuthLayout>} />

            <Route path="/*" element={<RootLayout><PageNotFound /></RootLayout>} />
          </Routes>
          <BottomMenu />
        </Suspense>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
