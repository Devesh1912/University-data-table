import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";

import University from "./components/University";
import IndividualUniversity from "./components/IndividualUniversity";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<University />} />
          <Route
            path="/country/:country/university/:name"
            element={<IndividualUniversity />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
