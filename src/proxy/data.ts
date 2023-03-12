import { getDataApi } from "../api";

export const getDataProxy = async () => {
  let res = await getDataApi();
  return res;
};
