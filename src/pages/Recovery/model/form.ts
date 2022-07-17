import {
	forward,
	createEffect,
	createStore,
	sample,
	createEvent,
} from "effector";
import { createForm } from "effector-forms";
import { sendCode, sendData } from "../../../api/auth";
import { checkAuth, checkTrigger } from "../../../store/AuthStore";

export const loginForm = createForm({
	fields: {
		email: {
			init: "",
			rules: [
				{
					name: "email",
					validator: (value: string) =>
						value !== ""
							? /^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+-/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9-]){1,25}.)([a-zA-Z0-9]{2,4})$/g.test(
									value
							  )
							: true,
				},
			],
			validateOn: ["change"],
		},
	},
	validateOn: ["submit"],
});
export const loginFx = createEffect(async ({ email }: { email: string }) => {
	const response = sendCode(email);
	if (response === false) {
		return { check: false, typePop: false };
	} else {
		return { check: false, typePop: true };
	}
});
export const errEvent = createEvent();
export const resetEvent = createEvent();
export const $popChecker = createStore({ check: true, typePop: true }).on(
	errEvent,
	(_, data) => data
);
$popChecker.reset(resetEvent);
forward({
	from: loginForm.formValidated,
	to: loginFx,
});
sample({
	source: loginFx.doneData,
	fn: ({ check, typePop }: { check: boolean; typePop: boolean }) => ({
		check,
		typePop,
	}),
	target: errEvent,
});
