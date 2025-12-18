// import { Link, useLocation } from "react-router-dom";

// function Sidebar() {
//   const location = useLocation();

//   const linkClass = (path) =>
//     `nav-link ${location.pathname === path ? "active fw-bold" : ""}`;

//   return (
//     <div
//       className="bg-light border-end"
//       style={{ width: "220px", minHeight: "100vh" }}
//     >
//       <ul className="nav flex-column p-3">

//         <li className="nav-item mb-2">
//           <Link className={linkClass("/")} to="/">
//             Dashboard
//           </Link>
//         </li>

//         <li className="nav-item mb-2">
//           <Link className={linkClass("/analytics")} to="/analytics">
//             Analytics
//           </Link>
//         </li>

//         <li className="nav-item mb-2">
//           <Link className={linkClass("/insights")} to="/insights">
//             AI Insights
//           </Link>
//         </li>

//         <li className="nav-item mb-2">
//           <Link className={linkClass("/chat")} to="/chat">
//             Chat AI
//           </Link>
//         </li>

//         <li className="nav-item mb-2">
//           <Link className={linkClass("/settings")} to="/settings">
//             Settings
//           </Link>
//         </li>

//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: "220px" }}>
      <h5 className="mb-4">BizFusion</h5>

      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <NavLink to="/dashboard" className="nav-link text-white">
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/analytics" className="nav-link text-white">
            Analytics
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/ai-chat" className="nav-link text-white">
            AI Chat
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/settings" className="nav-link text-white">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

