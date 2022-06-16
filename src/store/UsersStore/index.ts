import { createEffect, createEvent, createStore } from "effector";
import { TUsersStore } from "../../interfaces";
import { database } from "./database";
export const addNumber = createEvent<number>();
export const addItem = createEffect((params: TUsersStore[]) => {
    const newItem = JSON.parse(JSON.stringify(params));
    return newItem;
});
export const $UsersStore = createStore<TUsersStore[]>(database)
.on(addItem, (_,item) => item)

export const $exampleStore = createStore(0)
.on(addNumber, (_,item) => item);
