// SmtpForm.js
import React, { useState } from 'react';
import './SmtpForm.css';

const SmtpForm = () => {
  const [smtpSettings, setSmtpSettings] = useState({
    username: '',
    email: '',
    password: '',
    preConfig: '',
    host: '',
    port: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSmtpSettings((prevSettings) => ({ ...prevSettings, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Configurações SMTP:', smtpSettings);
  };

  return (
    <div className="smtp-form-container">
        <div className="title-container">
            <h4>Servidor de e-mails SMTP</h4>
        </div>
        <div className="form-container">
            <p>A integração de e-mail por SMTP é habilitada de forma geral na conta e configurada
                de forma individual, por endereço de e-mail.
            </p>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div>
                        <label htmlFor="username">Usuário:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={smtpSettings.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={smtpSettings.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={smtpSettings.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="preConfig">Pré-config:</label>
                        <input
                            type="text"
                            id="preConfig"
                            name="preConfig"
                            value={smtpSettings.preConfig}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div>
                        <label htmlFor="host">Host:</label>
                        <input
                            type="text"
                            id="host"
                            name="host"
                            value={smtpSettings.host}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="port">Porta:</label>
                        <input
                            type="text"
                            id="port"
                            name="port"
                            value={smtpSettings.port}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-row">
                <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default SmtpForm;
