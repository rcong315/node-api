import axios from "axios";

export default axios.create({
  baseURL: "https://a15jnw3v2l.execute-api.us-west-2.amazonaws.com/default/",
  headers: {
    "Content-type": "application/json"
  }
});
