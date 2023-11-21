import React, { useState } from 'react';
import "./Nav.scss";
import logo from '../assets/CuidaDose.png';

function Nav() {
  const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")));

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "/";
  }

  return (
    <nav className="nav">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <div className="nav-right">
        {userLogado && (
          <div className="user-info">
            <p>{`Usuário logado: ${userLogado.usuario}`}</p>
            <button onClick={handleLogout} className='buttonlogout'>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;