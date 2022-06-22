import { createEffect, createEvent, createStore } from "effector";
import { TUsersStore } from "../../interfaces";
import { database } from "./database";
export const addNumber = createEvent<number>();
export const addItem = createEffect((params: TUsersStore[]) => {
    const newItem = JSON.parse(JSON.stringify(params));
    return newItem;
});
export const getUsers = createEffect(async () => {
    const url = "https://academtest.ilink.dev/reviews/getAll";
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("authorization", "Bearer" + " " + localStorage.getItem("token"));
    const req = await fetch(url, {
        method: "GET",
        headers: requestHeaders
    })
    return req.json();
});
export const $UsersStore = createStore<TUsersStore[]>(database)
.on(addItem, (_,item) => item)
export interface iRealStore {
    authorImage: string | null,
    authorName: string,
    createdAt?:  Date,
    deletedAt?:Date,
    identifier:string,
    status: string,
    text:string,
    title?:string,
    updatedAt?:Date,
    version?:number
}
export const $RealUsersStore = createStore<any[]>([])
.on(getUsers.doneData,(_,data) => data)
