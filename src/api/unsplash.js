import axios from "axios";

export default axios.create({
  headers: {
    Authorization: "Client-ID 7eXPGFjI8Rz_j_UJq4s53VrEfE0r2rDGB8dYRDFXXVc",
  },
  baseURL: "https://api.unsplash.com",
});
