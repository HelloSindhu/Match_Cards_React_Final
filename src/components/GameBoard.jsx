import { useEffect, useState } from "react";
import "./GameBoard.css";

import MatchCard from "./MatchCard";

const gameIcons = [
  { path: "src/assets/01.svg", matched: false },
  { path: "src/assets/02.svg", matched: false },
  { path: "src/assets/03.svg", matched: false },
  { path: "src/assets/04.svg", matched: false },
  { path: "src/assets/05.svg", matched: false },
  { path: "src/assets/06.svg", matched: false },
];

const GameBoard = () => {
  const [icons, setIcons] = useState([]);
  const [moves, setMoves] = useState(0);
  const [firstMove, setFirstMove] = useState(null);
  const [nextMove, setNextMove] = useState(null);

  const mixIcons = () => {
    const mixedIcons = [...gameIcons, ...gameIcons]
      .sort(() => Math.random() - 0.5) //Random Order (Negative => No Shuffle)
      .map((item) => ({ ...item, id: Math.random() }));

    setIcons(mixedIcons);
    setMoves(0);
    resetTurn();
  };

  console.log(icons, moves);

  const handleTurn = (choice) => {
    firstMove ? setNextMove(choice) : setFirstMove(choice);
  };

  useEffect(() => {
    if (firstMove && nextMove) {
      if (firstMove.path === nextMove.path) {
        console.log("Matches!");
        setIcons((prevIcons) => {
          return prevIcons.map((icon) => {
            if (icon.path === firstMove.path) {
              return { ...icon, matched: true };
            } else {
              return icon;
            }
          });
        });
        resetTurn();
      } else {
        console.log("Not Matched!");
        resetTurn();
      }
    }
  }, [firstMove, nextMove]);

  

  const resetTurn = () => {
    setFirstMove(null);
    setNextMove(null);
    setMoves((prevMoves) => prevMoves + 1);
  };

  return (
    <section className="gameBoard">
      <section className="grid-board">
        {icons.map((icon) => (
          <MatchCard
            key={icon.id}
            card={icon}
            handleTurn={handleTurn}
            flipped={icon === firstMove || icon.matched}
          />
        ))}
      </section>
      <section className="action">
        <button className="gameBtn" onClick={mixIcons}>
          {icons.length == 0 ? "New Game" : "Restart Game" }
        </button>
      </section>
    </section>
  );
};

export default GameBoard;
