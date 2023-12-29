// UserDataForm.js

import React, { useState } from 'react';
import { FaCalendar, FaEnvelope, FaCogs, FaStickyNote } from 'react-icons/fa';
import './UserDataForm.css';
import SmtpForm from './SmtpForm';

const Tab = ({ label, onClick, isActive }) => (
  <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {label}
  </div>
);

const UserDataForm = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="other-page-content">
      <h1>Meus dados</h1>
      <p>Gerencie seus dados de usuário e suas configurações de agenda e de e-mail.</p>

      <div className="tabs">
        <Tab label={<><FaStickyNote /> <span></span> Dados</>} onClick={() => handleTabClick('tab1')} isActive={activeTab === 'tab1'} />
        <Tab label={<><FaCalendar /> <span></span> Agenda</>} onClick={() => handleTabClick('tab2')} isActive={activeTab === 'tab2'} />
        <Tab label={<><FaEnvelope /> <span></span> E-mails</>} onClick={() => handleTabClick('tab3')} isActive={activeTab === 'tab3'} />
        <Tab label={<><FaCogs /> <span></span> Outras configurações</>} onClick={() => handleTabClick('tab4')} isActive={activeTab === 'tab4'} />
      </div>

      {activeTab === 'tab1' && <p>Conteúdo da Tab 1</p>}
      {activeTab === 'tab2' && <p>Conteúdo da Tab 2</p>}
      {activeTab === 'tab3' && <SmtpForm />}
      {activeTab === 'tab4' && <p>Conteúdo da Tab 4</p>}
    </div>
  );
};

export default UserDataForm;
