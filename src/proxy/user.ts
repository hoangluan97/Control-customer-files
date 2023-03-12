import { loginApi } from "api/user";

export const loginProxy = async () => {
  let fakeInformation = {
    accountNo: 994985849,
    loginPwd: "d33314f30983215c29c2af0c1bcd2b43",
    accessSource: "pc",
  };
  let res = await loginApi(fakeInformation);
  return res;
};
