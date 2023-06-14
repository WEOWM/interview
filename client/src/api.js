import axios from "axios";

const ActionHandle = (payload) => {
  return new Promise((resolve, reject) => {
    payload.baseURL = "http://localhost:5000/auth";
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
