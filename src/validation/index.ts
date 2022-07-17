export const usernameValidation = (value: string) => {
  const regexp: RegExp = /^[a-zA-ZА-Яа-я]+$/g;
  if (value.match(regexp)) return true;
  return "Имя или Фамилия состоит из некорректных символов";
};
export const dateValidation = (value: string) => {
  const regexp: RegExp =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g;
  if (value.match(regexp)) return true;
  return "Некорректный формат даты";
};
export const compareDates = (value: string) => {
  const [day, month, year] = value.split(".");
  const date = new Date(+parseInt(year), parseInt(month) - 1, +parseInt(day));
  const currentDate = new Date();
  if (date > currentDate) {
    return "Больше текущей даты";
  }
  return true;
};
export const validateFields = (
  date: string,
  firstName: string,
  lastName: string
) => {
  if (
    usernameValidation(firstName) !== true ||
    usernameValidation(lastName) !== true
  ) {
    return "Имя и фамилия должны содержать только буквы!";
  } else if (dateValidation(date) !== true) {
    return "Формат даты должен быть дд.мм.гггг";
  } else if (compareDates(date) !== true) {
    return "День рождения должен быть больше текущей даты!";
  }
  return true;
};
