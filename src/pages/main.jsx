import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="column-center text-cyan-950">
      <div className="text-4xl font-bold mb-6">
        명작 콘솔 게임 시리즈 월드컵
      </div>
      <Link to="/worldcup">
        <button className="text-2xl link-btn-style">시 작</button>
      </Link>
    </div>
  );
}
export default Main;
