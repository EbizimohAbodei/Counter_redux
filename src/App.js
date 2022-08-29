import "./index.css";
import Button from "./component/Button";
import Circle from "./component/Circle";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decreaseFive,
  reset,
  decrement,
  increaseFive,
  selectCount,
} from "./features/counter/CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="appContainer">
      <h1 className="App-header">Counter Redux App</h1>
      <Circle count={count} />
      <div className="buttons">
        <Button click={() => dispatch(decreaseFive(5))} name="Decrease 5" />
        <Button click={() => dispatch(decrement(1))} name="Decrease 1" />
        <Button click={() => dispatch(reset(0))} name="RESET" />
        <Button click={() => dispatch(increaseFive(5))} name="Increase 5" />
        <Button click={() => dispatch(increment(1))} name="Increase 1" />
      </div>
    </div>
  );
};

export default App;
