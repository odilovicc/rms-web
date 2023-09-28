import NavLink from "./NavLinks/NavLink";
import "./Navbar.css";
import { Button } from "primereact/button";
export default function Navbar() {
  const overviewLink = {
    linkname: "Overview",
    iconClass: "pi pi-chart-bar text-[--primary]",
    navigate: "",
  };
  const transactionsLink = {
    linkname: "Transactions",
    iconClass: "pi pi-sync text-[--primary]",
    navigate: "",
  };
  const homeLink = {
    linkname: "Home",
    iconClass: "pi pi-home text-[--primary]",
    navigate: "",
  };
  const settingsLink = {
    linkname: "Settings",
    iconClass: "pi pi-cog text-[--primary]",
    navigate: "",
  };

  return (
    <div className="navbar">
      <NavLink {...overviewLink} unactive />
      <NavLink {...transactionsLink} unactive />
      <div className="px-9"></div>
        <a href="#" className="shop-button">
          <i className="scale-150 text-white pi pi-shopping-cart"></i>
        </a>
      {" "}
      <NavLink {...homeLink} unactive />
      <NavLink {...settingsLink} />
    </div>
  );
}
