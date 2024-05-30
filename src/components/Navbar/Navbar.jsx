import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-contact">
          <span>(225) 555-0118</span>
          <span>michelle.rivera@example.com</span>
        </div>
        <div className="navbar-promo">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>
        <div>
        <a href="/">📸</a>
          <a href="/">📘</a>
          <a href="/">🐦</a>
        </div>
      </div>
      <div className="navbar-main">
        <div className="navbar-logo">Bandage</div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
          <a href="/">Pages</a>
        </nav>
        <div className="navbar-icons">
          <a href="/">Login / Register</a>
          <a href="/">🔍</a>
          <a href="/">🛒</a>
          <a href="/">❤️</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
