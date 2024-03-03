import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Routing from "./routes/Routing";
import Login from "./pages/Login";
import ErrorModal from "./components/ErrorModal";
import callApi from "./hooks/callApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  // Funzione per gestire il login
  const handleLogin = async (email, password) => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await callApi(`utente/accedi`, "POST", formData);
      const data = await response.json();

      const token = data.body.token;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      setErrorModalVisible(true);
    }
  };

  // Funzione per gestire il logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* Error Modal Login */}
      <ErrorModal
        visible={errorModalVisible}
        onClose={() => setErrorModalVisible(false)}
      />

      <Router>
        <Routes>
          <Route
            path="*"
            element={
              // isLoggedIn ?
                <Layout>
                  <Routing onLogout={handleLogout} />
                </Layout>
                // :
                // <Login onLogin={handleLogin} />
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
