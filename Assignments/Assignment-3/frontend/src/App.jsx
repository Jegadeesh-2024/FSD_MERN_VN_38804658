
import './App.css'
import Card from './Forms/Card';
import Details from './Forms/Details';
import Form from './Forms/Form'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from 'react';
function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/card" element={<Card />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;