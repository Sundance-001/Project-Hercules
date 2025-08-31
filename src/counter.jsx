import { useState } from "react";
import { Link } from "react-router-dom";
import "./explore.css";

const Counter = () => {
  // Right sidebar → Tech interests
  const interestsRight = [
    { name: "Data Science", path: "/data-science" },
    { name: "IoT Projects", path: "/iot" },
    { name: "Web Development", path: "/web-dev" },
    { name: "AI & Machine Learning", path: "/ai" },
  ];

  // Left sidebar → Personal interests
  const interestsLeft = [
    { name: "Cinema and Theater" },
    { name: "Art & Literature" },
    { name: "Engineering" },
    { name: "Blogs" },
  ];

  // Separate counters for left and right sidebar
  const [visibleRight, setVisibleRight] = useState(0);
  const [visibleLeft, setVisibleLeft] = useState(0);

  // Reveal button → Right sidebar
  const handleReveal = () => {
    if (visibleRight < interestsRight.length) {
      setVisibleRight(visibleRight + 1);
    }
  };

  // Kursk button → Left sidebar
  const handleCenter = () => {
    if (visibleLeft < interestsLeft.length) {
      setVisibleLeft(visibleLeft + 1);
    }
  };

  return (
    <>
      {/* Buttons centered below socials */}
      <div className="buttons-center">
        <button onClick={handleReveal} className="explore-button">
          Interests
        </button>
        <button onClick={handleCenter} className="explore-button">
          Prospects
        </button>
      </div>

      {/* Right sidebar → Tech Interests */}
      <div className="sidebar-right">
        <div className="interests-flex sidebar-interests">
          {interestsRight.slice(0, visibleRight).map((item, index) => (
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

      {/* Left sidebar → Personal Interests */}
      <div className="sidebar-left">
        <div className="interests-flex sidebar-interests">
          {interestsLeft.slice(0, visibleLeft).map((item, index) => (
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
