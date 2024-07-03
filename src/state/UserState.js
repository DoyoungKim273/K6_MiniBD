import { atom } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false,
});

export const userIdState = atom({
  key: "userIdState",
  default: "",
});
