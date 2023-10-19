import React from 'react';

export default function HeaderCreate() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="addbooking">
                  User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user-booking">
                  Not User
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
