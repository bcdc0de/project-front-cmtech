// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaBuilding, FaChartBar, FaSearch, FaQuestion, FaStar } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleItemClick = (event) => {
    event.stopPropagation();

    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleSidebar}>
      <ul>
        <li onClick={handleItemClick}>
          <Link to="/">
            {isExpanded ? <><FaHome size={20} /> Home</> : <FaHome size={30} />}
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/Pipeline">
            {isExpanded ? <><FaStar size={20} /> Pipeline</> : <FaStar size={30} />}
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/Activities">
            {isExpanded ? <><FaTasks size={20} /> Atividades</> : <FaTasks size={30} />}
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/Companies">
            {isExpanded ? <><FaBuilding size={20} /> Empresas</> : <FaBuilding size={30} />}
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/Dashboard">
            {isExpanded ? <><FaChartBar size={20} /> Dashboard</> : <FaChartBar size={30} />}
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/Forecast">
            {isExpanded ? <><FaSearch size={20} /> Forecast</> : <FaSearch size={30} />}
          </Link>
        </li>
        <li onClick={handleItemClick}>
          <Link to="/Help">
            {isExpanded ? <><FaQuestion size={20} /> Ajuda</> : <FaQuestion size={30} />}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
