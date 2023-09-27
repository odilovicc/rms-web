import Navbar from "../components/Navbar/Navbar";
import App from "../pages/index/App";
export default function Layout() {
  return (
    <div>
      <div className="h-[90vh]">
        <App></App>
      </div>
      <Navbar />
    </div>
  );
}
