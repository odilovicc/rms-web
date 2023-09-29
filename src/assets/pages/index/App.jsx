import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";
import Branches from "../Branches/Branches";
import Staff from "../Staff/Staff";
import CreateStaff from '../Staff/page/CreateStaff'
import Services from '../Services/Services'
import CreateService from '../Services/Labels/createService'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import "./App.css";
function App() {
  return (
    <div className="mainContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Settings/> }/>
          <Route exact path="/profile" element={<Profile/> }/>
          <Route exact path="/branches" element={<Branches/> }/>
          <Route exact path="/staff" element={<Staff/> }/>
          <Route exact path="/staff" element={<Staff/> }/>
          <Route exact path="/staff/create" element={<CreateStaff/> }/>
          <Route exact path="/services" element={<Services/> }/>
          <Route exact path="/services/create" element={<CreateService/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
