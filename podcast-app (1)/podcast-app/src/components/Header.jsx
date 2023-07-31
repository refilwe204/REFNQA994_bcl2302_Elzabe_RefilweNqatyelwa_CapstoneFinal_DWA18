
import './Header.css'; // Import the custom CSS file for header styles

const Header = () => {
  return (
    <header className="app-header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
