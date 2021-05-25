import "./header.css";
import Link from 'next/link';

export default function Header() {
    return(
		<header className="header">
      <div className="container">
        <div className="header__body">
          <Link href={'/'}>
            <a className="header__logo">
              <img
                src="/images/logo.png"
                alt="logo couch-leaning text and cross in blue and red"
              />
            </a>
          </Link>
          <div className="header__burger">
          </div>
          <nav className="header__menu">
            <ul className="header__list">
              <li>
                <Link href={'/'}>
                  <a className="header__link">About Us</a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a className="header__link">Services</a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a className="header__link">Prices</a>
                </Link>
              </li>
              <li>
                <Link href={'/contacts'}>
                  <a className="header__link">Contact</a>
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  <a className="header__link">Blog</a>
                </Link>
              </li>
              <li>
                <Link href={'/feedback'}>
                  <a className="header__link">Feedbacks</a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a className="header__link">Media</a>
                </Link>
              </li>
            </ul>
            <div className="header__phone">1 (212) 767-9314</div>
          </nav>
          <div className="header__phone2">1 (212) 767-9314</div>
        </div>
      </div>
    </header>
	);
};
