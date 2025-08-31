//Explore is unused from an earlier version for proof of concept
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./explore.css";

// function Explore() {
//   const interests = [
//     { name: "Data Science", path: "/data-science" },
//     { name: "IoT Projects", path: "/iot" },
//     { name: "Web Development", path: "/web-dev" },
//     { name: "AI & Machine Learning", path: "/ai" },
//   ];

//   const [visibleCount, setVisibleCount] = useState(0);

//   const handleExploreClick = () => {
//     if (visibleCount < interests.length) {
//       setVisibleCount(visibleCount + 1);
//     }
//   };

//   return (
//     <div className="explore-sidebar">
//       {/* Explore Button at top of sidebar */}
//       <button onClick={handleExploreClick} className="explore-button">
//         Explore
//       </button>

//       {/* Interest Boxes stacked vertically */}
//       <div className="interests-flex">
//         {interests.slice(0, visibleCount).map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             className="interest-box animate-fadeIn"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Explore;
