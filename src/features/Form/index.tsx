/* eslint-disable no-useless-escape */
import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { AuthInputForm } from "../../shared/ui"
import { ButtonSubmit } from "../../shared/ui/Button"
import { AuthInput, AuthInputPassword } from "../../shared/ui/Input"
import { TResponseData } from "../../interfaces"

const StyledH2 = styled.h2`
font-family: Factor A;
color: #333333;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 0px;
margin-top:0px;
@media(max-width:768px){
    font-size: 24px;
}
`
interface IAuthForm{
    check:boolean,
    sendData:(data: TResponseData) => Promise<void>,
}
export const AuthForm:React.FC<IAuthForm> = ({check,sendData}) => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [buttonDisabled,setButtonDisabled] = useState<boolean>(true);
    const [inputInvalid, setInputInvalid] = useState<boolean>(false);
    const [mailInvalid, setMailInvalid] = useState<boolean>(false);
    const activeStyle = {
        color: "#585CC6",
        margin:"16px",
        fontFamily: "Gilroy",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "16px",
        letterSpacing: "0em",
        textDecoration: "none",
};
    // const items = useStore($listItems);
    // const addItemEv = useEvent(addItem);
    const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
    const regexPassword: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/g;
useEffect(() => {

    if(password.match(regexPassword)){
        setInputInvalid(false);
    }
    if(regexLogin.test(name)){
        setMailInvalid(false);
    }
    if(regexLogin.test(name) && password.match(regexPassword)){
        setButtonDisabled(false);
        setInputInvalid(false);
        setMailInvalid(false);
    } else{
        setButtonDisabled(true);
        
    }
},[name,password]);

    const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        
        setInputInvalid(true);
    }
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setMailInvalid(true);
    };
    const onSubmit = (e: React.FormEvent) => {
        const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
        const regexPassword: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/g;
        e.preventDefault();
    
        if (name && password) {
        if(regexLogin.test(name) && password.match(regexPassword)){
            const data = {
                email: name,
                password: password,
            };
sendData(data)
        }}

    };
    
    return(
        <AuthInputForm onSubmit={onSubmit}>
        <StyledH2>Войти</StyledH2>
        <AuthInput check={check} inputName={"Логин"} inputType={"text"} onChangeFunc={onNameChange} inputPattern="^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$" infoValue={mailInvalid} />
        <AuthInputPassword check={check} inputName={"Пароль"} onChangeFunc={onPasswordChange} infoValue={inputInvalid} inputPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$" />
        <ButtonSubmit buttonType="submit" buttonDisabled={buttonDisabled} buttonText='Войти'/>
        <NavLink 
        style={activeStyle}
        to="recovery">Забыли пароль?</NavLink>
        </AuthInputForm>
    )
}