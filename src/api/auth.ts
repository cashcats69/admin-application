import { TResponseData } from "../shared/config";

export async function sendData(data: TResponseData) {
    const response = await fetch("https://academtest.ilink.dev/user/signIn", {
        headers: {
            Accept: "*/*",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: `email=${data.email}&password=${data.password}`,
    });
    if (response.ok) {
        let json = await response.json();
        localStorage.setItem("token", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        return response.status;
    } else {
        return response.status;
    }
}
export function sendCode(data: string) {
    const getValue = () => {
    return true;
    };
    const checker = getValue();
    return checker
}