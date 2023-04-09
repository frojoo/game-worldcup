import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import gameData from "../gameData.json";
import WinGameCard from "../components/winGameCard";
import { Link } from "react-router-dom";

function Worldcup() {
  const [shuffleCard, setShuffleCard] = useState();
  const [choice, setChoice] = useState(0);
  const [nextRound, setNextRound] = useState([]);
  const [end, setEnd] = useState(32);
  const [num, setNum] = useState(1);

  const onClickChoice = (V) => () => {
    setChoice(choice + 2);
    setNum(num + 1);
    setNextRound([...nextRound, V]);
  };

  useEffect(() => {
    let shuffleGameData = gameData.sort(() => {
      return Math.random() - 0.5;
    });
    setShuffleCard(shuffleGameData);
  }, []);

  useEffect(() => {
    console.log(nextRound);
  }, [nextRound]);

  useEffect(() => {
    if (choice === end) {
      setShuffleCard(nextRound);
      setChoice(0);
      setEnd(end / 2);
      setNextRound([]);
      setNum(1);
    }
  }, [choice]);

  return (
    <div className="bg-slate-100 w-full py-3 flex justify-center items-center">
      <Link to="/">
        <button className="absolute top-0 link-btn-style mt-4 ml-4 text-xl">
          Home
        </button>
      </Link>
      <div className="absolute top-0 mt-3 text-4xl mx-8 font-bold">{`${
        end === 2 ? "결승" : end === 1 ? "" : end + "강 " + num + "/" + end / 2
      }`}</div>
      {shuffleCard &&
        (end === 1 ? (
          <WinGameCard game={shuffleCard[choice]} />
        ) : (
          <>
            <GameCard
              game={shuffleCard[choice]}
              onClickChoice={onClickChoice}
              choice={choice}
            />

            <div className="mx-20 text-4xl">VS</div>
            <GameCard
              game={shuffleCard[choice + 1]}
              onClickChoice={onClickChoice}
              choice={choice + 1}
            />
          </>
        ))}
    </div>
  );
}
export default Worldcup;
