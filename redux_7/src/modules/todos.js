const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

let nextId = 1; // todo 데이터에 사용할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/*초기 상태 선언*/
//리듀서의 초기 상태는 꼭 객체 타입일 필요는 없다.
//배열이여도 되고 원시 타입, (숫자 문자열 , 불리언 이여도 상관 없다)

const initialState = [
  /* 이렇게 구성된 객체를 배열 안에 넣는다.
    {
        id : 1,
        text : ' 예시 ',
        done : false
    }
    */
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
