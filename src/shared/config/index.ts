import { MutableRefObject } from "react";

export interface IAvatarUser {
  currentImg: string | null;
}
export interface IBriefUser {
  smallAboutMe: string | null;
}
export type TResponseData = {
  email: string;
  password: string;
};
export interface INameUser {
  firstName: string | null;
  lastName: string | null;
}
export interface IMembersFilter {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  action: TUsersStore[];
  setAction: React.Dispatch<React.SetStateAction<TUsersStore[]>>;
}
export interface IReviewsFilter {
  state: string;
  action: iRealStore[];
  handleClick: (newAction: iRealStore[], value: string) => void;
}
export enum Filter {
  expelled = "Отчислен",
  studies = "Обучается",
  finished = "Закончил",
}
export enum FilterReview {
  unpublished = "onCheck",
  rejected = "declined",
  published = "approved",
}
export interface IPaginatedList {
  uStore: TUsersStore[];
  currentPage: number;
  paginate: (number: number) => void;
}
export interface IPaginatedMenu {
  currentPage: number;
}
export type TColorProp = {
  colorProp: string;
};
export type TButtonProp = {
  displayProp: string;
};
export type TTextProp = {
  displayProp: string;
  colorProp: string;
};
export type TAreas = {
  marginProp: string;
};
export type TContainer = {
  overflowProp: string;
};
export type TAboutInput = {
  inputName: string;
  placeholderName: string;
  widthProp: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  currentValue: string | null;
};
export type TAddInput = {
  placeholderName: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TDiv = Pick<TAboutInput, "widthProp">;
export type TButtonReview = {
  widthProp: string;
  colorProp: string;
  text: string;
  name: "publish" | "reject";
  handleClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  isDisabled: boolean;
};
export type TAboutSelect = {
  inputName: string;
  placeholderName: string;
  widthProp: string;
  isDisabled: boolean;
  currentValue: string | null;
  getValue: React.Dispatch<React.SetStateAction<string | null>>;
};
export type TGenderSelect = {
  inputName: string;
  placeholderName: string;
  widthProp: string;
  isDisabled: boolean;
  currentValue: string | null;
  getValue: React.Dispatch<React.SetStateAction<string | null>>;
};
export type TPetSelect = {
  inputName: string;
  placeholderName: string;
  widthProp: string;
  isDisabled: boolean;
  currentValue: boolean | null;
  getValue: React.Dispatch<React.SetStateAction<boolean | null>>;
};
export type TMain = Pick<TAboutSelect, "widthProp">;
export interface IStyledButton
  extends Omit<TButtonReview, "text" | "handleClick" | "isDisabled"> {
  transitionProp: string;
}
export type TAboutTextArea = {
  name: "long" | "short";
  TextAreaName: string;
  placeholderName: string;
  maxLength: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  normalHeightProp: string;
  heightProp: string;
  currentLength: number;
  isDisabled: boolean;
  currentValue: string | null;
};
export interface iModalTextArea
  extends Pick<TAboutTextArea, "maxLength" | "onChangeFunc" | "currentLength"> {
  content: string;
  isDisabled: boolean;
  name: string;
}
export interface iAddTextArea
  extends Pick<TAboutTextArea, "maxLength" | "onChangeFunc" | "currentLength"> {
  name: string;
}
export type TAboutArea = Pick<
  TAboutTextArea,
  "heightProp" | "normalHeightProp"
>;
export type TEditButton = {
  text: string;
  handleClick: () => void;
};
export type TPhotoInput = {
  currentValue: string;
  getValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export type TReviewPopup = {
  content: string;
  toggleModal: (e: React.SyntheticEvent) => void;
  finishEdit: (content: string) => void;
  loader: boolean;
};
export type TReviewAdd = {
  toggleModal: (e: React.SyntheticEvent) => void;
  makeReview: (content: TMakeReview) => void;
  loader: boolean;
};
export type IRecoveryButton = {
  buttonDisabled: boolean;
};
export interface IRecoveryForm {
  check: boolean;
  sendData: (data: string) => Promise<boolean>;
}
type SubmitButton = "submit";
type InputType = "text" | "password";
export type IButtonSubmit = {
  buttonText: string;
  buttonType: SubmitButton;
  buttonDisabled: boolean;
};
export type TErrorPopup = {
  check: boolean;
  text: string;
};
export type TCurrentText = {
  colorProp: string;
};
export type TNoData = {
  text: string;
};
export type TAlarmReview = {
  typePop: boolean;
  theme: "edit" | "send" | "profile";
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TErrSend = {
  typePop: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TUpdateStatus = {
  id: string;
  status: "approved" | "declined";
};
export type TEditReview = {
  id: string;
  text: string;
};
export type IAuthInput = {
  inputName: string;
  inputType: InputType;
  infoValue: boolean;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputPattern: string;
  check: boolean;
};
export interface IAuthInputPassword {
  inputName: string;
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
  infoValue: boolean;
  inputPattern: string;
  check: boolean;
}
export type TStatusUser = "expelled" | "studies" | "finished";

export interface IStatusUser {
  academyStatus: TStatusUser;
}
export type TListItem = {
  id: number;
  name: string;
  password: string;
};
export type TUsersStore = {
  aboutMe: string | null;
  academyStatus: TStatusUser;
  birthDate: Date | null;
  cityOfResidence: string;
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  favoriteFood: string | null;
  firstName: string | null;
  gender: "male" | "female";
  hasPet: boolean;
  id: string;
  lastLoginDate: Date;
  lastName: string | null;
  password: string;
  petName: string | null;
  petType: string | null;
  profileImage: string | null;
  smallAboutMe: string | null;
  updatedAt: Date;
  version: number;
};
export type TUserAdmin = Pick<
  TUsersStore,
  "academyStatus" | "firstName" | "lastName" | "smallAboutMe" | "profileImage"
>;
export interface iRealStore {
  authorImage: string | null;
  authorName: string;
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  status: "onCheck" | "declined" | "approved";
  text: string;
  title: string | null;
  updatedAt: Date | null;
  version: number | null;
}
export interface TUserReviewCard extends iRealStore {
  handleClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}
export type TUserMainCard = Pick<
  iRealStore,
  "authorImage" | "authorName" | "text" | "createdAt"
>;
export type TReviewCardStatus = Pick<iRealStore, "status">;
export type TMakeReview = {
  authorName: string;
  content: string;
  captchaKey: string;
  captchaValue: string;
  imageFile: File | null;
};
export type TAvatarFile = {
  name: string;
  progress: number;
  toggleFunction: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  isSize: boolean;
};
export type TSwiper = {
  children: string;
  refOb: MutableRefObject<HTMLButtonElement | null>;
};
export type TMainInfo = {
  aboutMe: string;
  birthDate: string;
  cityOfResidence: string;
  firstName: string;
  gender: string;
  hasPet: string;
  lastName: string;
  profileImage: string;
};
