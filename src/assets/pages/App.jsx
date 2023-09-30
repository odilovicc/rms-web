import Settings from "./Settings/Settings.jsx";
import Profile from "./Profile/Profile.jsx";
import Branches from "./Branches/Branches.jsx";
import Staff from "./Staff/Staff.jsx";
import CreateStaff from './Staff/page/CreateStaff.jsx'
import Services from './Services/Services.jsx'
import CreateService from "./Services/Labels/CreateService.jsx"
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
