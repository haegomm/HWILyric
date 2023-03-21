import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Signup />}> */}
              <Route index element={<Signup />} />
              {/* <Route path="study" element={<Study />} /> */}
              {/* </Route> */}
          </Routes>
        </Router>
    </div>
  );
}

export default App;
