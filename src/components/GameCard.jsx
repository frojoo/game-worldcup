function GameCard({ onClickChoice, game }) {
  return (
    <div className="column-center">
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${game}.webp`}
        alt={game}
      />
      <div className="text-2xl font-bold">{game}</div>
      <button
        className="bg-slate-200 text-2xl mt-4 px-3 py-1 shadow-md rounded-md hover:scale-105"
        onClick={onClickChoice(game)}
      >
        선택
      </button>
    </div>
  );
}

export default GameCard;
