/* eslint-disable no-useless-escape */
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { AuthInput } from "../../shared/ui/Input"
import { RecoveryButton } from "../../shared/ui/RecoveryButton";
import Arrow from '../../shared/icons/Arrow.svg'
import { IRecoveryForm } from "../../interfaces";
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
@media (max-width: 550px) {
font-size: 24px;
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
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
text-align: center;
height: 52px;
width:185px;
border-radius: 2px;
border: 1px solid #585CC6;
cursor:pointer;
background: #FFFFFF;
color:#585CC6;
margin-top:32px;
margin-left:12px;
background-size: 0% 100%;
&:hover{
background-image: linear-gradient(#C2C4FF, #C2C4FF);
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 100% 100%;
transition: background-size .5s, color .5s;
}
@media (max-width: 550px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    height: 42px;
    width: 85%;
    display:none;
}`


export const RecoveryForm:React.FC<IRecoveryForm> = ({check,sendData}) => {
    const [name, setName] = useState<string>('');
    const [buttonDisabled,setButtonDisabled] = useState<boolean>(true);
    const [mailInvalid, setMailInvalid] = useState<boolean>(false);
    const [localCheck,setLocalCheck] = useState(true);
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
            setMailInvalid(false)
        }else{
            setButtonDisabled(true);
        }
    },[name]);
    
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setMailInvalid(true)
    };
    const onSubmit = async (e: React.FormEvent) => {
        const regexLogin = RegExp("^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$");
        e.preventDefault();
    
        if (name && regexLogin.test(name)) {
            const checker = sendData(name)
            if(await checker){setLocalCheck(false)}else{
                setLocalCheck(true)
            }
        }
        
    }
    return(
        <AuthInputForm onSubmit={onSubmit}>
            <Container><NavLink to='/'><Img src={Arrow}></Img></NavLink>
            <StyledH2>Изменение пароля</StyledH2></Container>
            <AuthInput check={localCheck ? check : !mailInvalid} inputName={"Электронная почта"} inputType={"text"} onChangeFunc={onNameChange} inputPattern="^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$" infoValue={mailInvalid}/>
            <Container><RecoveryButton buttonDisabled={buttonDisabled}/> <NavLink to='auth'><ButtonCancel>Отмена</ButtonCancel></NavLink></Container>
            </AuthInputForm>
    )

}