import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

/* 액션 타입 정의, 주로 대문자로 작성한다. */
const INCREASE = "INCREASE";
const DECREASE = "DECREAE";
const CHANGE_TEXT = "CHAGNE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

/* 액션 생성함수 정의 */

function increase() {
  return {
    type: INCREASE, // 액션 객체에는 type이 필수 값이다.
  };
}

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

/* 리듀서 만들기, 위 액션 생성 함수들읕 통해 만들어진 객체들을 참고해서 
    새로운 상태를 만드는 함수.
*/
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

/* 스토어 만들기 */
const store = createStore(reducer);
console.log("ㅅㅂ", store.getState());

// 스토어 안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때에는 unsubscribe()를 호출하면 된다.

//액션을 디스패치 해보자.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
