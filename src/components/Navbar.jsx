//import { HashLink as Link } from "react-router-hash-link";
import logo from '/assets/67710789679.webp'
import { Link } from 'react-scroll'

function Navbar() {

  const hide_menu = () => {
    if (window.innerWidth <= 768) {
      if (document.getElementById("list").style.display === "none") {
        document.getElementById("list").style.display = "block";
        document.getElementsByTagName("nav")[0].style.height = "100%";
        document.getElementById(
          "menu"
        ).innerHTML = String.raw`<i class="fa-solid fa-xmark"></i>`;
      } else {
        document.getElementById("list").style.display = "none";
        document.getElementById(
          "menu"
        ).innerHTML = String.raw`<i class="fa-solid fa-bars"></i>`;
        document.getElementsByTagName("nav")[0].style.height = "60px";
      }
    }
  };

  const wind_size = () => {
    if (window.innerWidth > 768) {
      document.getElementById("list").style.display = "flex";
      
      document.getElementsByTagName("nav")[0].style.height = "auto";
    } else {
      document.getElementById("list").style.display = "none";
      document.getElementById(
        "menu"
      ).innerHTML = String.raw`<i class="fa-solid fa-bars"></i>`;
      document.getElementsByTagName("nav")[0].style.height = "60px";
    }
  };

  window.addEventListener("load", wind_size);
  window.addEventListener("resize", wind_size);

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            {" "}
            <img
              src={logo}
              alt="logo"
            />{" "}
          </Link>
          <button
          type='button'
            style={{ height: "2.5rem", width: "2.2rem" }}
            id="menu"
            onClick={() => hide_menu()}
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul id="list">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => hide_menu()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => hide_menu()}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => hide_menu()}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => hide_menu()}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => hide_menu()}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
