function WinGameCard({ game }) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-2xl mb-4 font-bold">🎉🎉🎉 축하합니다! 🎉🎉🎉</div>
      <img
        className="border-8 border-white shadow-lg shadow-white w-96"
        src={`${process.env.PUBLIC_URL}/images/${game}.webp`}
        alt={game}
      />
      <div className="text-2xl mt-4 font-bold">
        👏당신이 뽑은 명작은 {game} 시리즈입니다👏
      </div>
    </div>
  );
}

export default WinGameCard;
