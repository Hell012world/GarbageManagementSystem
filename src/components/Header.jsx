import React from "react";
import "./Header.css"
function Header() {
  document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {myFunction()};
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
})
  return (
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
