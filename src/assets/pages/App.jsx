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
          <Route path="/profile" element={<Profile/> }/>
          <Route path="/branches" element={<Branches/> }/>
          <Route path="/staff" element={<Staff/> }/>
          <Route path="/staff" element={<Staff/> }/>
          <Route path="/staff/create" element={<CreateStaff/> }/>
          <Route path="/services" element={<Services/> }/>
          <Route path="/services/create" element={<CreateService/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
