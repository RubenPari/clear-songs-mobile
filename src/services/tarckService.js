import axios from "axios";
const FormData = require("form-data");
import { BASE_URL } from "@env";

const BASE_URL_TRACK = `${BASE_URL}/track`;

const getSummary = async () => {
  const response = await axios.get(`${BASE_URL_TRACK}/summary`);

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

const deleteByArtist = async (artistId) => {
  const response = await axios.delete(
    `${BASE_URL_TRACK}/by-artist/${artistId}`
  );

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

const deleteByGenre = async (genreName) => {
  const response = await axios.delete(
    `${BASE_URL_TRACK}/by-genre?name=${genreName}`
  );

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

const deleteByRange = async (min, max) => {
  var requestUrl;

  // Validate min and max
  if (min > max || min < 0 || max < 0 || min === max) {
    return false;
  }

  if (min && !max) {
    requestUrl = `${BASE_URL_TRACK}/by-range?min=${min}`;
  }

  if (!min && max) {
    requestUrl = `${BASE_URL_TRACK}/by-range?max=${max}`;
  }

  if (min && max) {
    requestUrl = `${BASE_URL_TRACK}/by-range?min=${min}&max=${max}`;
  }

  const response = await axios.delete(requestUrl);

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

/**
 * NOTE: filePath NOT includes the name of the file
 */
const deleteByFile = async (filePath) => {
  let data = new FormData();

  data.append("file", {
    uri: filePath,
    type: "text/txt",
    name: "summary.txt",
  });

  let config = {
    method: "delete",
    url: `${BASE_URL_TRACK}/by-file`,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: data,
  };

  const response = await axios(config);

  if (response.status !== 200) {
    return false;
  }

  return response.data;
};

export {
  getSummary,
  deleteByArtist,
  deleteByGenre,
  deleteByRange,
  deleteByFile,
};
