export interface IAvatarUser {
    currentImg:string | null,
}
export interface IBriefUser{
    brief:string,
}
export interface INameUser{
    name: string,
    surName:string
}
//User
export interface IMembersFilter {
    state:string,
    setState:React.Dispatch<React.SetStateAction<string>>,
    action:TUsersStore[],
    setAction:React.Dispatch<React.SetStateAction<TUsersStore[]>>
}
export interface IReviewsFilter {
    state:string,
    action:TUsersStore[],
    handleClick: (newAction:TUsersStore[],value:string) => void,
}
export enum Filter{
    other = "Все",
    expelled = "Отчислен",
    studying = "Обучается",
    finished = "Закончил",
}
//MembersFilter
export enum FilterReview{
    unpublished = "Сначала неопубликованные",
    rejected = "Сначала отклоненные",
    published = "Сначала опубликованные",
}
//Reviews filter
export interface IPaginatedList{
    uStore:TUsersStore[],
    currentPage:number,
    paginate: (number: number) => void
}
export interface IPaginatedMenu{
    currentPage:number,
}
export type TColorProp = {
    colorProp:string;
}
export type TButtonProp = {
    displayProp:string;
}
export type TTextProp = {
    displayProp:string;
    colorProp:string;
}
export type IRecoveryButton = {
    buttonDisabled:boolean,
}
export interface IRecoveryForm{
    check:boolean,
    setCheck:React.Dispatch<React.SetStateAction<boolean>>
}
type SubmitButton = 'submit'
type InputType = 'text' | 'password'
export type IButtonSubmit = {
    buttonText:string,
    buttonType: SubmitButton,
    buttonDisabled: boolean,
}
export type IAuthInput = {
    inputName:string,
    inputType:InputType,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputPattern:string,
    check:boolean,  
    }
export interface IAuthInputPassword {
    inputName:string,
    onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void,
    infoValue: boolean,
    inputPattern:string,
    check:boolean,  
}
export type StatusUser = 'expelled' | 'studying' | 'finished';

export interface IStatusUser {
    statusU:StatusUser
}
export type TListItem = {
        id: number,
        name: string,
        password: string,
    }    
export type TUsersStore = {
    id:number,
    avatar:string | null,
    name:string,
    surname:string,
    description:string,
    status:StatusUser,
    review:{
        [x: string]: any;
        message:string,
        statusMessage:FilterReview,
        edit:boolean,
        date:Date,
}
}
export type TUserAdmin = Omit<TUsersStore,"review" | "id">
export interface TUserReviewCard extends Omit<TUsersStore,"description" | "status"> {
    handleClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
export type TReviewCardStatus = Pick<TUsersStore,"review">