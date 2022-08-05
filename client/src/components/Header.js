import React from "react";
import logo from "../images/graphql-logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand d-flex py-2" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top my-2"
            alt="logo"
          />
          <span className="ml-5 my-2">Project Management App</span>
        </a>
      </div>
    </nav>
  );
}
