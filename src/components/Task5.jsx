import React from "react";

const fakeList = [
  { id: 14675, color: "red" },
  { id: 26767, color: "blue" },
  { id: 3456756, color: "green" },
  { id: 4567567, color: "tomato" },
];

const Task5 = () => {
  const [list, setList] = React.useState(fakeList);

  const removeItemFromList = (value) => {
    const filteredList = list.filter((i) => i.color !== value);
    setList(filteredList);
  };

  return (
    <div>
      <ul>
        {list.map((item, idx) => {
          return (
            <ListItem key={item.id} color={item.color}>
              <button onClick={() => removeItemFromList(item.color)}>
                Remove Item
              </button>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};

const ListItem = (props) => {
  const [isColored, setIsColored] = React.useState(false);

  const toggleColorStatus = () => {
    setIsColored(!isColored);
  };

  return (
    <div
      style={{
        background: isColored ? props.color : "white",
      }}
    >
      <p>color will be - {props.color}</p>
      <button onClick={toggleColorStatus}>Set Color</button>
      {props.children}
    </div>
  );
};

export default Task5;
