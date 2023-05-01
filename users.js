import axios from "axios";

export const users = {
  state: {
    usersData: [],
  },
  reducers: {
    setUsers: (state, payload) => {
      return {
        ...state,
        usersData: payload,
      };
    },
   
  },
  effects: (dispatch) => ({
    getUsersAsync: async (payload, rootState) => {
      try {
        
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
       
        const { data } = response;
        dispatch.users.setUsers(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        
      }
    },
    
  }),
};
