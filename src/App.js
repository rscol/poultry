import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NoNavLayout from "./layouts/NoNavLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./layouts/AdminLayout";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <Routes>
      <Route
        path="/SignUpForm"
        element={
          <NoNavLayout>
            <SignUpPage />
          </NoNavLayout>
        }
      />
      <Route
        path="/"
        element={
          <NoNavLayout>
            <SignInPage />
          </NoNavLayout>
        }
      />
      <Route path="/Dashboard" element={
        <Layout>
          <Dashboard />
        </Layout>
      } />
    </Routes>
  );
}

export default App;
