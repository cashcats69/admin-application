/* eslint-disable no-useless-concat */
import { createEffect, createStore } from "effector";
import { iRealStore, TUsersStore } from "../../shared/config";
import { checkAuth } from "../AuthStore";
import { setStateEv } from "../LoaderStore";
export const getReviews = createEffect(async () => {
  setStateEv();
  const url = "https://academtest.ilink.dev/reviews/getAll";
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set(
    "authorization",
    "Bearer" + " " + localStorage.getItem("token")
  );
  const response = await fetch(url, {
    method: "GET",
    headers: requestHeaders,
  });
  if (response.ok) {
    setStateEv();
    return response.json();
  } else if (response.status === 401) {
    checkAuth()
    setStateEv();
  }
});
export const getUsers = createEffect(async () => {
  const url = "https://academtest.ilink.dev/user/getAll";
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set(
    "authorization",
    "Bearer" + " " + localStorage.getItem("token")
  );
  const response = await fetch(url, {
    method: "GET",
    headers: requestHeaders,
  });
  if (response.ok) {
    return response.json();
  } else if (response.status === 401) {
    checkAuth()
  }
});

export const $RealUsersStore = createStore<iRealStore[]>([]).on(
  getReviews.doneData,
  (_, data) => data
);

export const $UsersStore = createStore<TUsersStore[]>([]).on(
  getUsers.doneData,
  (_, data) => data
);
