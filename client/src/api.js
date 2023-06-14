import axios from "axios";

const ActionHandle = (payload) => {
  return new Promise((resolve, reject) => {
    payload.baseURL = "https://interview-2nyw.onrender.com/auth";
    axios(payload)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response);
        } else console.log("fail", response);
        reject(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  SignInURL: "/sign-in",
  SignUpURL: "/sign-up",
  userDetailsURL: "/user/details/:id",

  ActionHandle,
};
