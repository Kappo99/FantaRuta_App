import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Routing from "./routes/Routing";
import Login from "./pages/Login";
import Modal from "./components/Modal";
import callApi from "./hooks/callApi";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <Routing />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
