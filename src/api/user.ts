import { httpApi } from "./instance";

export const loginApi = (input: any): Promise<any> => {
  return httpApi.get("user/login", { params: input });
};

export const logoutApi = (): Promise<any> => {
  return httpApi.get("user/logout");
};

export const createAccounttApi = (input: any): Promise<any> => {
  const objectKeys = Object.keys(input);
  const data = new FormData();
  for (let key of objectKeys) {
    data.append(key, input[key]);
  }

  return httpApi.post("user/create", data);
};
