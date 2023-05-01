import axios from "axios";

export const posts = {
  state: {
    postsData: [],
  },
  reducers: {
    setPosts: (state, payload) => {
      return {
        ...state,
        postsData: payload,
      };
    },
  },
  effects: (dispatch) => ({
    getPostsAsync: async (payload, rootState) => {
      try {
        
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos/"
        );
       
        const { data } = response;
        dispatch.posts.setPosts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
        
      }
    },
  }),
};
