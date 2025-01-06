import React, { useState } from 'react';
import './Welcome.css';

function Welcome({ sidebarColor }) {
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleHistoryMenu = () => {
    setIsHistoryExpanded(!isHistoryExpanded);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="welcome-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
      <div className="user-profile" onClick={toggleDropdown}>
          <span className="user-profile-text">Menu</span> {/* Text-based trigger */}
          <div className={`dropdown-content ${isDropdownVisible ? 'visible' : ''}`}>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </header>

      {/* Side Navigation Menu */}
      <nav className="side-nav">
        <div className="sidebar-logo">
          {/* Sidebar logo placeholder */}
        </div>
        <ul>
          <li>
            <a href="#" className="active">
              <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
              AI Hub
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
              Home
            </a>
          </li>
          <li className="expandable" onClick={toggleHistoryMenu}>
            <a href="#">
            <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
            History
            </a>
            <ul className={`submenu ${isHistoryExpanded ? 'visible' : ''}`}>
              <li>
                <a href="#">
                <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
                Recent Searches
                </a>
              </li>
              <li>
                <a href="#">
                <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
                Saved Threads
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
            <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
            Discover
            </a>
          </li>
          <li>
            <a href="#">
            <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
            Example Prompts
            </a>
          </li>
          <li>
            <a href="#">
            <img src="/menu-icon.png" alt="Menu Icon" className="menu-icon" style={{ width: '15px', height: '15px' }} /> {/* Same image */}
            Learn More
            </a>
          </li>
        </ul>
      </nav>

      {/* Central Content Area */}
      <main className="content">
        <h1>PLACEHOLDER</h1>
        <div className="input-area">
          <input type="text" placeholder="Start a thread..." />
          <button>Submit as New Thread</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Disclaimer: This platform is for internal use only.  
          <a href="#"> PLACEHOLDER 1 </a> | 
          <a href="#"> PLACEHOLDER 2 </a>
        </p>
        <p>2025 © PLACEHOLDER Inc.</p>
      </footer>
    </div>
  );
}

export default Welcome;