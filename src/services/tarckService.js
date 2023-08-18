import axios from "axios";
const FormData = require("form-data");
import { BASE_URL } from "@env";

const BASE_URL_TRACK = `${BASE_URL}/track`;

const getSummaryTracks = async () => {
  const response = await axios.get(`${BASE_URL_TRACK}/summary`);

  if (response.status !== 200) {
    console.log("error to fetch summary tracks" + response.data);
    return false;
  }

  console.log("success to fetch summary tracks");
  return response.data;
};

const deleteTracksByArtist = async (artistId) => {
  const response = await axios.delete(
    `${BASE_URL_TRACK}/by-artist/${artistId}`
  );

  if (response.status !== 200) {
    console.log("error to delete tracks by artist");
    return false;
  }

    console.log("success to delete tracks by artist");
  return response.data;
};

const deleteTracksByGenre = async (genreName) => {
  const response = await axios.delete(
    `${BASE_URL_TRACK}/by-genre?name=${genreName}`
  );

  if (response.status !== 200) {
    console.log("error to delete tracks by genre");
    return false;
  }

  console.log("success to delete tracks by genre");
  return response.data;
};

const deleteTracksByRange = async (min, max) => {
  var requestUrl;

  // Validate min and max
  if (min > max || min < 0 || max < 0 || min === max) {
    console.log("error to delete tracks by range");
    return false;
  }

  if (min && !max) {
    console.log("error to delete tracks by range");
    requestUrl = `${BASE_URL_TRACK}/by-range?min=${min}`;
  }

  if (!min && max) {
    console.log("error to delete tracks by range");
    requestUrl = `${BASE_URL_TRACK}/by-range?max=${max}`;
  }

  if (min && max) {
    console.log("success to delete tracks by range");
    requestUrl = `${BASE_URL_TRACK}/by-range?min=${min}&max=${max}`;
  }

  const response = await axios.delete(requestUrl);

  if (response.status !== 200) {
    console.log("error to delete tracks by range");
    return false;
  }

    console.log("success to delete tracks by range");
  return response.data;
};

/**
 * NOTE: filePath NOT includes the name of the file
 */
const deleteTracksByFile = async (filePath) => {
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
    console.log("error to delete tracks by file");
    return false;
  }

    console.log("success to delete tracks by file");
  return response.data;
};

export {
    getSummaryTracks,
    deleteTracksByArtist,
    deleteTracksByGenre,
    deleteTracksByRange,
    deleteTracksByFile,
};
