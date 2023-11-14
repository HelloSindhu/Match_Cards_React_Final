import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ title }) => {
  return (
    <section>
      <p className="game-title">{title}</p>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;


