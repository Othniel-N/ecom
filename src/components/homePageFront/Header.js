import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { NavLink, Link } from 'react-router-dom';
import "../homePageFront/styles/Header.css";

const Header = () => {
  return (
    <Navbar className="custom-bg-color" expand="md" variant="dark">
      <div className="container-xxl">
        <Navbar.Brand>
          <Link to="/" className="text-white">
            Awal-shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="text-white">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" className="text-white">
              Blogs
            </Nav.Link>
            <NavDropdown title="Shop Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-md-10 mt-3 mt-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product here..."
                aria-label="Search Product here..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-7" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md-1 mt-3 mt-md-0">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              {/* <Link className="d-flex align-items-center gap-10 text-white text-lg">
                <img src="/images/compare.svg" alt="compare" className="img-fluid" />
                <p className="mb-0">
                  Compare <br /> Products
                </p>
              </Link> */}
              {/* <Link className="d-flex align-items-center gap-10 text-white text-lg">
                <img src="/images/wishlist.svg" alt="wishlist" className="img-fluid" />
                <p className="mb-0">
                  Favourite <br /> Products
                </p>
              </Link> */}
              {/* <Link className="d-flex align-items-center gap-10 text-white text-lg">
                <img src="/images/user.svg" alt="user" className="img-fluid" />
                <p className="mb-0">
                  Login <br /> My Account
                </p>
              </Link> */}
              <Link to="/" className="d-flex align-items-center gap-10 text-white text-lg">
                <img src="/images/cart.svg" alt="cart" className="img-fluid" />
                <div className="d-flex flex-column gap-10">
                  {/* <span className="badge bg-white text-dark">0</span> */}
                  <p className="mb-0">Shop Now!</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
