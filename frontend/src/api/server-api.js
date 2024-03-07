import axios from "axios";

// async function getProducts() {
export async function getProducts() {
  return axios.get('http://127.0.0.1:5000/api/products')
    .then(function (response) {
      // handle success
      const { status, data } = response;

      if (status === 200) {
        return data;
      } else {
        throw new Error(`Request error. Status: ${status}`);
      }
    })
}
