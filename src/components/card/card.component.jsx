import { CardContainer } from "./card.styles";

let arr = [];

const storeToDatabase = (arr, score, updateCount) => {
  if (localStorage.getItem("database") === null) {
    localStorage.setItem("database", JSON.stringify({}));
  }
  const database = JSON.parse(localStorage.getItem("database"));
  const id = `session_${Object.keys(database).length + 1}`;
  database[id] = { arr, score };
  arr = [];
  updateCount(0);
  alert(`${id} has been saved`);

  localStorage.setItem("database", JSON.stringify(database));
};

const clickHandler = (colorName, updateCount, count) => {
  arr.push(colorName);
  let newCount = count + 1;
  updateCount(newCount);
  console.log(arr, count);
  let score = 0;
  if (count > 0 && arr.length % 10 === 0) {
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] === arr[i + 1]) {
        score++;
      }
    }
    storeToDatabase(arr, score, updateCount);
  }
};

const Card = ({ color, colorName, count, updateCount }) => {
  return (
    <CardContainer
      onClick={() => {
        clickHandler(colorName, updateCount, count);
      }}
      color={color}
    >
      {colorName}
    </CardContainer>
  );
};

export default Card;
