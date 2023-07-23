import axios from "axios";
const request = async (url, method, data = [], header = []) => {
  const response = await axios({
    url,
    method,
    data,
    header,
  });
  return response;
};

const get = async (url, header = []) => request(url, "GET", [], header);
const post = async (url, data = [], header = []) =>
  request(url, "POST", data, header);

export { get, post };
