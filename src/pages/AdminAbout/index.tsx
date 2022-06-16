import styled from "@emotion/styled"
import { useState } from "react"
import { AdminHeader } from "../../features/AdminPanelHeader"
import { PaginatedMenu } from "../../features/PaginatedMenu"
import { AboutInput } from "../../shared/ui/AboutInput"
import { AboutSelect, GenderSelect, PetsSelect } from "../../shared/ui/AboutSelect"
import { AboutTextArea } from "../../shared/ui/AboutTextArea"
import { ButtonEdit, ButtonFinish } from "../../shared/ui/ButtonEdit"
import { Footer } from "../../shared/ui/Footer"
import { PhotoInput } from "../../shared/ui/PhotoInput"

const Container = styled.div`
background-color: #FFFFFF;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
position:relative;
font-size: calc(10px + 2vmin);
color: white;
overflow-x:hidden;
`
const BodyContainer = styled.div`
height:100%;
display:flex;
flex-direction:row;
@media(max-width:990px){
    flex-direction:column;
    width:100%;
}
`
const StyledMenu = styled.div`
width:273px;
@media(max-width:990px){
    width:100%;
}
`
const StyledUsers = styled.p`
margin: 59px 0 40px 0;
font-family: Factor A TRIAL;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
@media(max-width:990px){
font-size: 22px;
margin: 26px 0 16px 0;
}
`
const AboutList = styled.div`
display:flex;
flex-direction:column;
width:1063px;
margin:0 16px 0 16px;
@media(max-width:990px){
    width:auto;
}
`
const PhotoContainer = styled.div`
display:flex;
flex-direction:column;
@media(max-width:990px){
}
`
const TopInputsContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
@media(max-width:990px){
flex-direction:column;
}
`
const MiddleInputsContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
@media(max-width:990px){
flex-direction:column;
}
`
type TAreas = {
    marginProp:string,
}
const TextAreasContainer = styled.div<TAreas>(({marginProp}) =>`
display:flex;
flex-direction:column;
width:100%;
margin: 0 0 25% 0;
@media(max-width:990px){
    margin: 0 0 ${marginProp} 0;
}
`)
export const AdminAbout:React.FC = () => {
    const [valueShort,setValueShort] = useState('')
    const [valueLong,setValueLong] = useState('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(e.target.name === 'short'){
            setValueShort(e.target.value)
            console.log('+')
        }
        if(e.target.name === 'long'){
            setValueLong(e.target.value)
            console.log('-')
        }
        console.log(e.target.value)
    }
    const [check,setCheck] = useState(false)
    return(
        <Container>
            <AdminHeader/>
            <BodyContainer>
            <StyledMenu><PaginatedMenu currentPage={2}/></StyledMenu>
            <AboutList>
                <StyledUsers>Обо мне</StyledUsers>
                <PhotoContainer><PhotoInput/>{ check ? <></> :<ButtonEdit text="Редактировать" handleClick={() => setCheck(!check)}/> }</PhotoContainer>
                <TopInputsContainer>
                    <AboutInput inputName={"Имя"} placeholderName={"Имя"} inputPattern={"A-z"} onChangeFunc={handleChange}/>
                    <AboutInput inputName={"Фамилия"} placeholderName={"Фамилия"} inputPattern={"A-z"} onChangeFunc={handleChange}/>
                    <AboutInput inputName={"Дата рождения"} placeholderName={"08.10.1999"} inputPattern={"\d{1,2}/\d{1,2}/\d{4}"} onChangeFunc={handleChange}/>
                    </TopInputsContainer>
                    <MiddleInputsContainer>
                    <AboutSelect inputName={"Город"} placeholderName={"Город"}/>
                    <GenderSelect inputName={"Пол"} placeholderName={"Пол"}/>
                    <PetsSelect inputName={"Животное"} placeholderName={"Нет"}/>
                    </MiddleInputsContainer>
                    <TextAreasContainer marginProp={check ? "24px" :"80px"}>
                        <AboutTextArea name='short'currentLength={valueShort.length} heightProp="57px" TextAreaName="Краткая информация" placeholderName="Немножечко..." maxLength="99" onChangeFunc={handleChange}/>
                        <AboutTextArea name='long' currentLength={valueLong.length} heightProp="235px" TextAreaName="О себе" placeholderName="Расскажите миру о вас!" maxLength="300" onChangeFunc={handleChange}/>
                    </TextAreasContainer>
                    
                    {check ? <ButtonFinish text="Сохранить изменения" handleClick={() => setCheck(!check)} /> : <></>}
            </AboutList>

            </BodyContainer>
            <Footer/>
        </Container>
    )
}