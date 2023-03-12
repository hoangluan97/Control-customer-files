import { httpApi } from "./mock/http.api.mock";

export const getDataApi = (): Promise<any> => {
  return httpApi.get("/");
};
