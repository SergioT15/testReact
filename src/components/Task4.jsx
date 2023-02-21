
const fakeList = [1, 2, 3, 4]

const Task4 = () => {
  return (
    <div>
      <ul>
        {fakeList.map((item) => {
          return (
          <li>
            {item}
          </li>)
        })}
      </ul>
    </div>
  )
};


export default Task4;
