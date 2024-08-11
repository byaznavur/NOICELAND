import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../UI/Button/Button";
import "./style.scss";
const index = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!open);

    console.log(open);
    console.log("Click");
  };
  return (
    <header>
      <div className="header container">
        <div className="header__logo">
          <a href="#">NOICELAND</a>
        </div>

        <nav className="header__nav">
          <ul className={`header__nav-list ${open ? "hidden" : "show"}`}>
            <li className="header__nav-list__item">
              <a className="header__nav-list__item-link" href="#">
                Home
              </a>
            </li>
            <li className="header__nav-list__item">
              <a className="header__nav-list__item-link" href="#">
                Latest
              </a>
            </li>
            <li className="header__nav-list__item">
              <a className="header__nav-list__item-link" href="#">
                About
              </a>
            </li>
          </ul>
          <Button content="Login" type="button" classList="btnlogin" />
          <div className="header__nav-toggle">
            <GiHamburgerMenu onClick={toggle} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
