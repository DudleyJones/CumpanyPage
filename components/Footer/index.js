import "./footer.css";
import Link from "next/link";
import sprite from "../../public/images/sprite.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__icons">
		  <Link href={"/"}>
              <a className="social-link">
                <svg className="icons">
                  <use href={sprite + "#youtube"} />
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a className="social-link">
                <svg className="icons">
                  <use href={sprite + "#facebook"} />
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a className="social-link">
                <svg className="icons">
                  <use href={sprite + "#twitter"} />
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a className="social-link">
                <svg className="icons">
                  <use href={sprite + "#instagram"} />
                </svg>
              </a>
            </Link>
            <Link href={"/"}>
              <a className="social-link">
                <svg className="icons">
                  <use href={sprite + "#linkedin"} />
                </svg>
              </a>
            </Link>
          </div>
          <nav className="footer__menu">
            <ul className="footer__list">
              <li>
                <Link href={"/"}>
                  <a className="footer__link">About Us</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="footer__link">Prices</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="footer__link">Equipment</a>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <a className="footer__link">Cleaning Solutions</a>
                </Link>
              </li>
              <li>
                <Link href={"/blog"}>
                  <a className="footer__link">Blog</a>
                </Link>
              </li>
              <li>
                <Link href={"/privacy"}>
                  <a className="footer__link">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href={"/contacts"}>
                  <a className="footer__link">Contacts</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="footer__copyright">
            <p>Couch-Cleaning® All rights reserved © 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
