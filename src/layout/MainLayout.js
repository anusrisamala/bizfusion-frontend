import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function MainLayout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Navbar />
        <div className="container-fluid mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
