import { createEffect, createEvent, createStore, forward,sample } from "effector";
import jwtDecode from "jwt-decode";
export const checkAuth = createEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    const { exp }:{exp:number} = jwtDecode(token);
    if (exp > Date.now() / 1000) {
      return true;
    } else return false;
  } else return false;
});
export const checkTrigger = createEvent()
export const resetTrigger = createEvent()
export const $AuthUser = createStore(false)
export const $NavTrigger = createStore(false).reset(resetTrigger)
$NavTrigger.watch((data) => {console.log(data)});
forward({
  from:checkAuth.doneData,
  to:$AuthUser
});
sample({
  clock: checkTrigger,
  source: $NavTrigger,
  fn: (state:boolean) => (!state),
  target: $NavTrigger
});