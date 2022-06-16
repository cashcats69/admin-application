import { createEvent, createStore } from "effector";
import { TListItem } from "../../interfaces";

export const addItem = createEvent<TListItem>();
export const setItems = createEvent<TListItem[]>();
export const deleteEvent = createEvent<number>();

export const $AuthUsers = createStore<TListItem[]>([])
  .on(addItem, (state, item) => [...state, item])
  .on(setItems, (state, items) => items)
  .on(deleteEvent, (state, id) => state.filter(el => el.id !== id))
