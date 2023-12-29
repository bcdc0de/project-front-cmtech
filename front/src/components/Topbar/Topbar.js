// Topbar.js
import React, { useState } from 'react';
import { FaBell, FaQuestionCircle, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topbar">
      <div className="spacer"></div>
      <div className="icons">
        <FaQuestionCircle className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon" onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="user-menu">
          <Link to="/UserDataForm">
            <div>Editar dados do usuário</div>
          </Link>
          <div> Outro item </div>
          <div> Outro item dois </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;