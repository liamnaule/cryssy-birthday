import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiEffect = () => {
  const { width, height } = useWindowSize();

  return (
    <Confetti
      width={width}
      height={height}
      recycle={true}
      numberOfPieces={200}
      gravity={0.1}
      colors={["#ff6f91", "#ffcccb", "#d4a5ff", "#a3e4d7"]}
    />
  );
};

export default ConfettiEffect;