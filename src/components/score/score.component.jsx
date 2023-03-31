import { ScoreContainer } from "./score.styles";
const Score = ({ count }) => {
  return (
    <ScoreContainer>{`${
      count % 2 === 0 ? "Người chọn" : "Người chơi"
    }`}</ScoreContainer>
  );
};

export default Score;
