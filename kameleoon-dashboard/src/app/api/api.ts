import axios from "axios";
import { Test, Site } from "../types/testTypes";

const API_BASE_URL = "http://localhost:3100";

export const fetchSites = async (): Promise<Site[]> => {
  const response = await axios.get(`${API_BASE_URL}/sites`);
  return response.data;
};

export const fetchTests = async (): Promise<Test[]> => {
  const response = await axios.get(`${API_BASE_URL}/tests`);
  return response.data;
};
