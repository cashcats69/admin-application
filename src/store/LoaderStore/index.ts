import {createEvent, createStore } from "effector";
export const setStateEv = createEvent()
export const $LoaderStore = createStore(false)
.on(setStateEv, (state) => !state)