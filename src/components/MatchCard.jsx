import PropTypes from "prop-types";
import "./MatchCard.css";
// import HideFace from "../assets/hideIcon.svg";
import OverlapIcon from "../assets/maskIcon.svg";

const MatchCard = ({ card, handleTurn, flipped }) => {
  const handleClick = () => {
    handleTurn(card);
  };

  console.log(card.path);
  return (
    <section className="icon">
      <section className={flipped ? "flipped" : ""}>
        <section>
          <img className="cardFace" src={card.path} alt="" />
          <img
            className={card.matched ? "lockFace" : "coverFace"}
            src={OverlapIcon}
            onClick={handleClick}
          />
        </section>
      </section>
    </section>
  );
};

MatchCard.propTypes = {
  card: PropTypes.string,
  handleTurn: PropTypes.func,
  flipped: PropTypes.string,
};

export default MatchCard;
