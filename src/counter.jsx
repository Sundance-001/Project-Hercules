import { useState } from "react";
import { Link } from "react-router-dom";
import "./explore.css";

const Counter = () => {
  const interests = [
    { name: "Data Science", path: "/data-science" },
    { name: "IoT Projects", path: "/iot" },
    { name: "Web Development", path: "/web-dev" },
    { name: "AI & Machine Learning", path: "/ai" },
  ];

  // Separate counters for left and right sidebar
  const [visibleRight, setVisibleRight] = useState(0);
  const [visibleLeft, setVisibleLeft] = useState(0);

  // Reveal button → Right sidebar
  const handleReveal = () => {
    if (visibleRight < interests.length) {
      setVisibleRight(visibleRight + 1);
    }
  };

  // Kursk button → Left sidebar
  const handleCenter = () => {
    if (visibleLeft < interests.length) {
      setVisibleLeft(visibleLeft + 1);
    }
  };

  return (
    <>
      {/* Buttons centered below socials */}
      <div className="buttons-center">
        <button onClick={handleReveal} className="explore-button">
          Reveal
        </button>
        <button onClick={handleCenter} className="explore-button">
          Kursk
        </button>
      </div>

      {/* Right sidebar → Reveal */}
      <div className="sidebar-right">
        <div className="interests-flex sidebar-interests">
          {interests.slice(0, visibleRight).map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="interest-box animate-fadeIn"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Left sidebar → Kursk */}
      <div className="sidebar-left">
        <div className="interests-flex sidebar-interests">
          {interests.slice(0, visibleLeft).map((item, index) => (
            <div key={index} className="interest-box animate-fadeIn">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
