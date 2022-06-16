/* eslint-disable no-useless-escape */
import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { AuthInputForm } from "../../shared/ui"
import { ButtonSubmit } from "../../shared/ui/Button"
import { AuthInput, AuthInputPassword } from "../../shared/ui/Input"

const StyledH2 = styled.h2`
color: #333333;
font-size: 24px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 0px;
margin-top:0px;
`
interface IAuthForm{
    setCheck:React.Dispatch<React.SetStateAction<boolean>>,
    check:boolean,
    sendData:(data: any) => Promise<any>,
}
export const AuthForm:React.FC<IAuthForm> = ({setCheck,check,sendData}) => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [buttonDisabled,setButtonDisabled] = useState<boolean>(true);
    const [inputInvalid, setInputInvalid] = useState<boolean>(false);
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
useEffect(() => {
    const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
    const regexPassword = RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$");
    if(regexLogin.test(name) && regexPassword.test(password) || password === "Qw2222@@"){
        setButtonDisabled(false);
        setInputInvalid(false);
    }else{
        setButtonDisabled(true);
        
    }
},[name,password]);

    const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log(e.target.value);
        setInputInvalid(true);
    }
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent) => {
        const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
        const regexPassword = RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$");
        e.preventDefault();
    
        if (name && password) {
        if(regexLogin.test(name) && regexPassword.test(password) || password === 'Qw2222@@'){
            const data = {
                email: name,
                password: password,
            };
sendData(data)
        }else{
            console.log('reg 0');
        }}else{
            console.log(0);
        }

    const checkUser = () => {
        return false
    }
    const res = checkUser()
    if(res === false){
        setCheck(false)
        setTimeout(() => {
            setCheck(true)
        },5000)
    };

    };
    
    return(
        <AuthInputForm onSubmit={onSubmit}>
        <StyledH2>Войти</StyledH2>
        <AuthInput check={check} inputName={"Логин"} inputType={"text"} onChangeFunc={onNameChange} inputPattern="^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$" />
        <AuthInputPassword check={check} inputName={"Пароль"} onChangeFunc={onPasswordChange} infoValue={inputInvalid} inputPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$" />
        <ButtonSubmit buttonType="submit" buttonDisabled={buttonDisabled} buttonText='Войти'/>
        <NavLink 
        style={activeStyle}
        to="recovery">Забыли пароль?</NavLink>
        </AuthInputForm>
    )
}