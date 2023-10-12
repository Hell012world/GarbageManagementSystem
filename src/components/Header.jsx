import React from "react";
import "./Header.css"
function Header() {
  return (
    // <div>
      <header id="header">
    
    <nav id="nav-bar">
    <div className="Heading">GarbageManager</div>
      <ul>
        <a className="nav-link" href="#LOGIN">Login</a>
        <a className="nav-link" href="#SignUp">SignUp</a>
      </ul>
    </nav>
  </header>

  );
}

export default Header;
