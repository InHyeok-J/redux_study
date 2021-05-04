import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseAsync,
  decreaseAsync,
  increase,
  decrease,
} from "../modules/counter";
function CounterContainer() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    console.log("증가");
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    console.log("감소");

    dispatch(decreaseAsync());
  };
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer;
