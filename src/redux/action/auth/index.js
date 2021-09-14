import axios from "axios";

export const doLogin = (email, password) => {
   return dispatch => {
      axios.get("https://reqres.in/api/login")
         .then((res) => {
            dispatch({
               type: "LOGIN",
               payload: res.data
            })
         })
   
   }
}

