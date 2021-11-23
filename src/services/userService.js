import axios from 'axios'


const backendUrl = process.env.ECOMMERCE_APP_BACKEND_URL;

export const addUser = async (data) => {

      await axios.post(`${backendUrl}/register`, data);

};

export const userLogin = async (data) => {

      var received= null;
      await axios.post(`${backendUrl}/login`, data).then(res => {
            received =res.data;
      });
      return received;

};

export const getUser = async () => {
      var received = null;
      await axios.get(`${backendUrl}/auth/profile`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt-token")}` },
        })
        .then((res) => {
          received = res.data;
        });
      return received;
};