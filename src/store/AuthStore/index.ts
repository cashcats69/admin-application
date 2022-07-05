import { createEffect, createEvent, createStore } from "effector";
import jwtDecode from "jwt-decode";
type TExp ={
  exp:number,
}
export const authTrue = createEvent()
export const authFalse = createEvent()
export const checkAuth = createEffect( () => {
  const token = localStorage.getItem('token')
  if(token){
    const {exp}:TExp = jwtDecode(token)
    if(exp > Date.now()/1000){
      return true
    } else return false
  }
})
export const $AuthUser = createStore(false)
.on(authTrue, (_) => true)
.on(authFalse, (_) => false)
.on(checkAuth.doneData, (_,data) => data)

