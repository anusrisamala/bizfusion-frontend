
// import { useAnalytics } from "../../context/AnalyticsContext";

// function FilterBar() {
//   const { filter, setFilter } = useAnalytics();

//   const handleChange = (e) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <div className="card p-3 mb-4">
//       <div className="row align-items-center">
//         <div className="col-md-3">
//           <select className="form-select" value={filter} onChange={handleChange}>
//             <option value="7">Last 7 Days</option>
//             <option value="30">Last 30 Days</option>
//             <option value="month">This Month</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FilterBar;

import { useAnalytics } from "../../context/AnalyticsContext";

function FilterBar() {
  const { filter, setFilter } = useAnalytics();

  const handleChange = (e) => {
    setFilter(e.target.value); // updates context filter
  };

  return (
    <div className="card p-3 mb-4">
      <div className="row align-items-center">
        <div className="col-md-3">
          <select className="form-select" value={filter} onChange={handleChange}>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
