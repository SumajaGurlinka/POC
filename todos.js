import axios from "axios";

export const todos = {
  state: {
    todosData: [],
  },
  reducers: {
    setTodos: (state, payload) => {
      return {
        ...state,
        todosData: payload,
      };
    },
    addTodo: (state, payload) => {
      const newTodos = [...state.todosData, payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));

      return {
        ...state,
        todosData: newTodos,
      };
    },
  },
  effects: (dispatch) => ({
    getTodosAsync: async (payload, rootState) => {
      try {
        const data = JSON.parse(localStorage.getItem("todos"));

        dispatch.todos.setTodos(data);
      } catch (error) {
        console.error(error);
      }
    },
    addTodoAsync: async (payload, rootState) => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos/",
          payload
        );
        const { data } = response;
        dispatch.todos.addTodo(data);
      } catch (error) {
        console.error(error);
      }
    },
  }),
};
