export interface IAvatarUser {
    currentImg:string | null,
}
export interface IBriefUser{
    brief:string,
}
export type TResponseData = {
    email: string; 
    password: string 
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
export type TAreas = {
    marginProp:string,
}
export type TContainer = {
    overflowProp:string
}
export type TAboutInput ={
    inputName:string,
    placeholderName:string,
    inputPattern:string,
    widthProp:string,
    onChangeFunc:(e:React.ChangeEvent<HTMLInputElement>) => void,
}
export type TDiv = Pick<TAboutInput,'widthProp'>
export type TButtonReview = {
    widthProp:string,
    colorProp:string,
    text:string,
    handleClick:(e:React.SyntheticEvent<HTMLButtonElement>) => void
}
export type TAboutSelect ={
    inputName:string,
    placeholderName:string,
    widthProp:string
}
export type TMain = Pick<TAboutSelect,'widthProp'>
export type TStyledButton = Omit<TButtonReview,'text' | 'handleClick'>
export type TAboutTextArea ={
    name:'long' | 'short'
    TextAreaName:string,
    placeholderName:string,
    maxLength:string,
    onChangeFunc:(e:React.ChangeEvent<HTMLTextAreaElement>) => void,
    normalHeightProp:string,
    heightProp:string,
    currentLength:number
}
export interface iModalTextArea extends Pick<TAboutTextArea, 'maxLength' | 'onChangeFunc' | 'currentLength'> {
    content:string
}
export type TAboutArea = Pick<TAboutTextArea,'heightProp' | 'normalHeightProp'>
export type TEditButton = {
    text:string,
    handleClick: () => void,
}
export type TReviewPopup = {
    content:string,
    toggleModal:(e:React.SyntheticEvent) => void,
    finishEdit:(content:string) => void,
    }
export type IRecoveryButton = {
    buttonDisabled:boolean,
}
export interface IRecoveryForm{
    check:boolean,
    sendData:(data: string) => Promise<boolean>,
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
    infoValue: boolean,
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