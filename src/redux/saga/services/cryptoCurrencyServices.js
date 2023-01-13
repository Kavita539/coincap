import axios from "axios";

export const getCryptoCurrencyService = (pageNumber) =>
  axios.get(`https://api.coincap.io/v2/assets?limit=${pageNumber}`)