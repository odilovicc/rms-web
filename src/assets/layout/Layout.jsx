import Navbar from "../components/Navbar/Navbar";
import App from "../pages/index/App";
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-1">
        <App></App>
        </div>
      <div className="mt-auto">
      <Navbar />
      </div>
    </div>
  );
}
