import React from "react";
import "./navbar.scss";
import profile from '../../assets/image/hassan.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { toggleState } from "../../features/DashboardSlice";


const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const changeDashboardView = () => {
    dispatch(toggleState())
  }

  const removeToken = () => {
    localStorage.removeItem('accessToken');
    navigate('/sign-in');
    window.location.reload();
  }

  return (
    <>
      <nav className="navbar navbar-top padding-0 navbar-expand navbar-dashboard navbar-dark me-0 pe-0">
        <div className="container-fluid navbar_small px-0">
          <div
            className="d-flex justify-content-between w-100"
            id="navbarSupportedContent"
          >
            <div className="d-flex align-items-center">
              <form
                className="navbar-search form-inline"
                id="navbar-search-main"
              >
               
                <div className="input-group  input-group-merge search-bar">
                {/* side bar icon */}
                <i class="fa fa-bars mt-2 me-3" aria-hidden="true" style={{fontSize:'23px', color:'black'}} onClick={changeDashboardView}></i>
                  {/* <span className="input-group-text " id="topbar-addon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span> */}
                  {/* <input
                    type="text"
                    className="form-control"
                    id="topbarInputIconLeft"
                    placeholder="Type to search"
                    aria-label="Search"
                    aria-describedby="topbar-addon"
                  /> */}
                </div>
              </form>
            </div>
            {/*<ul className="navbar-nav align-items-center">
               <li className="nav-item dropdown ">
                <a
                  className="nav-link text-dark notification-bell unread dropdown-toggle"
                  data-unread-notifications="true"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                  style={{ padding: "2px" }}
                >
                  <i
                    className="fa fa-user-secret"
                    aria-hidden="true"
                    style={{ color: "black", fontSize: "21px" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link text-dark notification-bell unread dropdown-toggle"
                  data-unread-notifications="true"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                  style={{ padding: "2px" }}
                >
                  <i
                    class="fa fa-bell"
                    aria-hidden="true"
                    style={{ fontSize: "21px" }}
                  >
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning warning">
                      4<span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                </a>
              </li> 

              <li className="nav-item dropdown ms-lg-3">
                <a
                  className="nav-link dropdown-toggle pt-1 px-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="media d-flex align-items-center">
                    <img
                      className="avatar rounded-circle"
                      alt="Image placeholder"
                      src={profile}
                    />
                  </div>
                </a>
                <div className="dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1">
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    My Profile
                  </a>
                  {/* <Link to="/settings"
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <svg
                      className="dropdown-icon text-gray-400 me-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Settings

                  <div role="separator" className="dropdown-divider my-1"></div>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#" onClick={removeToken}
                  >
                    <svg
                      className="dropdown-icon text-danger me-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </div>
              </li>

            </ul>*/}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
