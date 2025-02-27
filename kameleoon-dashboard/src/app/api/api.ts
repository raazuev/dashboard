import axios from "axios";
import { Test, Site } from "../../entities/model/testTypes";

const API_BASE_URL = "http://localhost:3100";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

const cache = new Map<string, any>();

export const fetchSites = async (): Promise<Site[]> => {
  const controller = new AbortController();
  if (cache.has("sites")) return cache.get("sites");

  try {
    const response = await api.get("/sites", { signal: controller.signal });
    cache.set("sites", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки сайтов:", error);
    throw error;
  }
};

export const fetchTests = async (): Promise<Test[]> => {
  const controller = new AbortController();
  if (cache.has("tests")) return cache.get("tests");

  try {
    const response = await api.get("/tests", { signal: controller.signal });
    cache.set("tests", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка загрузки тестов:", error);
    throw error;
  }
};

export const fetchAllData = async () => {
  try {
    const [sites, tests] = await Promise.all([fetchSites(), fetchTests()]);
    return { sites, tests };
  } catch (error) {
    console.error("Ошибка загрузки данных", error);
    throw error;
  }
};
