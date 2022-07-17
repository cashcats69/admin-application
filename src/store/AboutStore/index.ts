import { createEffect, createStore } from "effector";
import { useEvent } from "effector-react";
import { checkAuth } from "../AuthStore";
interface iUserStore {
  aboutMe: string | null;
  birthDate: string | null;
  cityOfResidence: string | null;
  firstName: string | null;
  gender: "male" | "female" | null;
  hasPet: boolean | null;
  lastName: string | null;
  profileImage: string | null;
  smallAboutMe: string | null;
}
export const getData = createEffect(async () => {
  const response = await fetch(
    "https://academtest.ilink.dev/user/getUserProfile",
    {
      headers: {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    const editedData = {
      aboutMe: data.aboutMe,
      birthDate: data.birthDate,
      cityOfResidence: data.cityOfResidence,
      firstName: data.firstName,
      gender: data.gender,
      hasPet: data.hasPet,
      lastName: data.lastName,
      profileImage: data.profileImage,
      smallAboutMe: data.smallAboutMe,
    };
    return editedData;
  } else if (response.status === 401) {
    checkAuth()
  }
});

export const saveData = createEffect(
  async (data: {
    firstName: string;
    lastName: string;
    birthDate: string;
    cityOfResidence: string | null;
    gender: string | null;
    hasPet: boolean | null;
    smallAboutMe: string | null;
    aboutMe: string | null;
  }) => {
    const url = `https://academtest.ilink.dev/user/updateInfo`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        birthDate: data.birthDate,
        cityOfResidence: data.cityOfResidence,
        gender: data.gender,
        hasPet: data.hasPet,
        smallAboutMe: data.smallAboutMe,
        aboutMe: data.aboutMe,
      }),
    });
    return response;
  }
);
export const $userStore = createStore<iUserStore>({
  aboutMe: "",
  birthDate: "",
  cityOfResidence: "",
  firstName: "",
  gender: "female",
  hasPet: true,
  lastName: "",
  profileImage: "",
  smallAboutMe: "",
}).on(getData.doneData, (_, data) => data);
