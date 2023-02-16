import React, { useState } from "react";
import Main from '../Main';
import './style.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const bodyStyle = {
    backgroundColor: isDarkMode ? "#111" : "#ECF0F1",
  };
  
  const sectionStyle = {
    backgroundColor: isDarkMode ? "#111" : "white",
    color: isDarkMode ? "#f8f8f8" : "#1f1f1f",
    border: isDarkMode ? "2px solid rgb(255, 5, 0)" : "2px solid rgba(255, 255, 255, 0)",
  };

  const btnStyle = {
    backgroundColor: isDarkMode ? "#f8f8f8" : "rgb(255, 5, 0)",
    color: isDarkMode ? "rgb(255, 5, 0)" : "rgb(255, 255, 250)",
  };

  return (
    <div className="front-body" style={bodyStyle}>
      <button className="dark-btn" style={btnStyle} onClick={toggleDarkMode}> CT </button>
      <section className="section" style={sectionStyle}>
        <Main/>
      </section>
    </div>
  );
}

export default App;