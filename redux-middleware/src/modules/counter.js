import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

//action type
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

//action 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

const initialState = 0;

function* increaseSaga() {
  yield delay(1000); //1초를 기다린다.
  yield put(increase()); //  put은 특정 액션을 디스패치해준다.
}

function* decreasesaga() {
  yield delay(1000); // 1초 기다리기
  yield put(decrease()); // put은 특정 액션을 디스패치해준다.
}
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreasesaga);
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
