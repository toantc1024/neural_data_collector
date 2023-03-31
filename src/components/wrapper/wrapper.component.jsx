import Card from "../card/card.component";
import { WrapperContainer } from "./wrapper.styles";

const colors = [
  {
    colorCode: "#ff1c1cad",
    colorName: "Đỏ",
  },
  {
    colorCode: "#37f87b",
    colorName: "Xanh Lá",
  },
  {
    colorCode: "#288dff",
    colorName: "Xanh biển",
  },
  {
    colorCode: "#ffe000",
    colorName: "Vàng",
  },
];

const Wrapper = ({ updateCount, count }) => {
  return (
    <WrapperContainer>
      {colors.map((color) => {
        const { colorCode, colorName } = color;
        return (
          <Card
            count={count}
            updateCount={updateCount}
            key={colorCode}
            color={colorCode}
            colorName={colorName}
          />
        );
      })}
    </WrapperContainer>
  );
};

export default Wrapper;
