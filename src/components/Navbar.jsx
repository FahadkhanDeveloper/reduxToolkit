import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Wrapper>
      <div>Welcome to Fahad khan Tech</div>
      <h1>User Tabel</h1>
      <section>
        <div>One Destination for Complete web Development</div>
        <nav>
          <ul className="menuItems">
            <li>
              <a href="/" data-item="Home">
                Home
              </a>
            </li>

            <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>

            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>

            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>

            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  nav {
    margin: 3rem 0;
    background: #f9f9f9;
    padding: 1rem 0;
  }
  nav .menuItems {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  nav .menuItems li {
    margin: 1rem 3rem;
  }
  nav .menuItems li a {
    text-decoration: none;
    color: #8f8f8f;
    font-size: 28px;
    font-weight: 350;
    transition: all 0.5s ease-in-out;
    position: relative;
    text-transform: uppercase;
  }
  nav .menuItems li a::before {
    content: attr(data-item);
    transition: 0.5s;
    color: #8254ff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    overflow: hidden;
  }
  nav .menuItems li a:hover::before {
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
  @media screen and (max-width: 998px) {
    nav .menuItems li {
      margin: 0.6rem 5rem;
    }
  }
`;
export default Navbar;
