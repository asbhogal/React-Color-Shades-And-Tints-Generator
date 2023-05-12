import headerLogo from "/favicon.svg";

const Header = () => {
  return (
    <header className="header">
      <aside className="header__icon-container">
        <img
          className="header__icon-container__icon"
          src={headerLogo}
          alt="A series of blue, pink, yellow and grey color swatches"
        />
      </aside>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <a className="header__nav__list__item" href="#about">
              About
            </a>
          </li>
          <li className="header__nav__list__item">
            <a className="header__nav__list__item" href="#helps">
              Help
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
