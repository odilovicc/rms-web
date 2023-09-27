import ReactDOM from "react-dom/client";
import Layout from "./assets/layout/Layout";
import "./assets/css/index.css";

// Primereact linking
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <Layout />
);
