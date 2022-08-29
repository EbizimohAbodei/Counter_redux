import "./index.css";
import Button from "./component/Button";
import Circle from "./component/Circle";
import { useSelector } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
const App = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="appContainer">
      <h1 className="App-header">Counter Redux App</h1>
      <Circle count={count} />
      <div className="buttons">
        <Button name="Decrease 5" />
        <Button name="Decrease 1" />
        <Button name="RESET" />
        <Button name="Increase 5" />
        <Button name="Increase 1" />
      </div>
    </div>
  );
};

export default App;
