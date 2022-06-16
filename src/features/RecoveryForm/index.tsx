/* eslint-disable no-useless-escape */
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { AuthInput } from "../../shared/ui/Input"
import { RecoveryButton } from "../../shared/ui/RecoveryButton";
import Arrow from '../../shared/icons/Arrow.svg'
import { IRecoveryForm } from "../../interfaces";
const StyledH2 = styled.h2`
color: #333333;
font-size: 24px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 0px;
margin-top:0px;
@media (max-width: 550px) {
    font-size:18px;
}
`
export const AuthInputForm = styled.form`
height:288px;
width:80%;
max-width:628px;
min-height: 246px;
min-width: 288px;
border-radius: 2px;
background:white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ButtonCancel = styled.button`
height: 52px;
width:185px;
border-radius: 2px;
border: 1px solid #585CC6;
cursor:pointer;
font-size: 14px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0.01em;
text-align: center;
background: #FFFFFF;
color:#585CC6;
margin-top:32px;
margin-left:12px;
@media (max-width: 550px) {
    height: 42px;
    width: 85%;
    display:none;
}`


export const RecoveryForm:React.FC<IRecoveryForm> = ({check,setCheck}) => {
    const [name, setName] = useState<string>('');
    const [buttonDisabled,setButtonDisabled] = useState<boolean>(true);

const Container = styled.div`
position:relative;
display:flex;
flex-direction:row;
justify-content:center;
width:100%;`
const Img = styled.img`
position:absolute;
left:7.5%;
top:30%;
`
    useEffect(() => {
        const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
        if(regexLogin.test(name)){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[name]);
    
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent) => {
        const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
        e.preventDefault();
    
        if (name) {
        //   addItemEv({
        //     id: Date.now(),
        //     name: name,
        //     password: password,
        //   });
        if(regexLogin.test(name)){
        console.log(1);
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
    }
    return(
        <AuthInputForm onSubmit={onSubmit}>
            <Container><NavLink to='/'><Img src={Arrow}></Img></NavLink>
            <StyledH2>Изменение пароля</StyledH2></Container>
            <AuthInput check={check} inputName={"Электронная почта"} inputType={"text"} onChangeFunc={onNameChange} inputPattern="^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$"/>
            <Container><RecoveryButton buttonDisabled={buttonDisabled}/> <NavLink to='/'><ButtonCancel>Отмена</ButtonCancel></NavLink></Container>
            </AuthInputForm>
    )

}