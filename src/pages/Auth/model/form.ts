import { forward, createEffect, createStore, sample, createEvent } from "effector";
import { createForm } from "effector-forms";
import { sendData } from "../../../api/auth";
import { checkAuth, checkTrigger } from "../../../store/AuthStore";

export const loginForm = createForm({
	fields: {
		email: {
			init: "", 
			rules: [
				{
					name: "email",
					validator: (value: string) =>
						value !== "" ? /^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+-/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9-]){1,25}.)([a-zA-Z0-9]{2,4})$/g.test(value) : true,
				},
			],
			validateOn: ["change"],
		},
		password: {
			init: "", 
			rules: [
				{
					name: "required",
					validator: (value: string) =>
						value !== "" ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/g.test(value) : true,
				},
			],
			validateOn: ["change"],
		},
	},
	validateOn: ["submit"],
});

export const loginFx = createEffect(async (data:{email: string;password: string;}) => {
    const response = await sendData(data)
    if(response === 201){
        checkAuth();
        console.log(1);
		checkTrigger();
        return {check:true,errText:""};
    }else if(response === 400){
        console.log(400)
        return {check:false,errText:"Введен неверный пароль"}
    } else if(response === 500){
        console.log(500)
        return {check:false,errText:"Данного пользователя не существует"}
    } else{
        console.log('other')
        return {check:false,errText:"Произошла неизвестная ошибка"}
    }
});
export const errEvent = createEvent();
export const resetEvent = createEvent();
export const $errChecker = createStore({check:true,errText:''}).on(errEvent, (_,data) => data)
$errChecker.reset(resetEvent)
forward({
	from: loginForm.formValidated,
	to: loginFx,
});
sample({
    source: loginFx.doneData,
    fn: ({check,errText}:{check:boolean, errText:string}) => ({check, errText}),
    target: errEvent,
})
