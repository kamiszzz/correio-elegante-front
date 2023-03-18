import axios from "axios"

export const http = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 10000
});


    api.post("/",{},{headers: {"": token,"": refreshtoken}})
      .then(async (res) => {
        localStorage.setItem("token", res?.data?.token)

          return resolve(res);
        })
        .catch((err) => {
          // Fazer algo caso não seja feito o refresh token
          return reject(err);
        });