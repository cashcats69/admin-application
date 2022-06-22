import styled from "@emotion/styled"
import { useState } from "react"
import { AdminHeader } from "../../features/AdminPanelHeader"
import { PaginatedMenu } from "../../features/PaginatedMenu"
import { TAreas } from "../../interfaces"
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
@media(max-width:768px){
    flex-direction:column;
    width:100%;
}
`
const StyledMenu = styled.div`
width:273px;
@media(max-width:1000px){
    width:230px;
}
@media(max-width:850px){
    width:160px;
}
@media(max-width:768px){
    width:100%;
}
`
const StyledUsers = styled.p`
margin: 43px 0 40px 0;
font-family: Factor A TRIAL;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
@media(max-width:768px){
font-size: 22px;
margin: 26px 0 16px 0;
}
`
const AboutList = styled.div`
display:flex;
flex-direction:column;
width:1063px;
margin:0 16px 0 16px;
@media(max-width:1400px){
    width:800px;
}
@media(max-width:1100px){
    width:600px;
}
@media(max-width:768px){
    width:auto;
}
`
const PhotoContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
@media(max-width:768px){
    flex-direction:column;
}
`
const TopInputsContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
@media(max-width:768px){
flex-direction:column;
}
`
const MiddleInputsContainer = styled.div`
display:flex;
flex-direction:row;
width:100%;
@media(max-width:768px){
flex-direction:column;
}
`

const TextAreasContainer = styled.div<TAreas>(({marginProp}) =>`
display:flex;
flex-direction:column;
width:100%;
margin: 0 0 calc(${marginProp} * 3.5) 0;
@media(max-width:768px){
    margin: 0 0 calc(${marginProp} + 24px) 0;
}
`)
export const AdminAbout:React.FC = () => {
    const [valueShort,setValueShort] = useState('')
    const [valueLong,setValueLong] = useState('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(e.target.name === 'short'){
            setValueShort(e.target.value)
            
        }
        if(e.target.name === 'long'){
            setValueLong(e.target.value)
            
        }
        
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
                    <AboutInput widthProp={'40%'}inputName={"Имя"} placeholderName={"Имя"} inputPattern={"A-z"} onChangeFunc={handleChange}/>
                    <AboutInput widthProp={'40%'}inputName={"Фамилия"} placeholderName={"Фамилия"} inputPattern={"A-z"} onChangeFunc={handleChange}/>
                    <AboutInput widthProp={'20%'}inputName={"Дата рождения"} placeholderName={"08.10.1999"} inputPattern={"\d{1,2}/\d{1,2}/\d{4}"} onChangeFunc={handleChange}/>
                    </TopInputsContainer>
                    <MiddleInputsContainer>
                    <AboutSelect widthProp='403px' inputName={"Город"} placeholderName={"Город"}/>
                    <GenderSelect widthProp='403px' inputName={"Пол"} placeholderName={"Пол"}/>
                    <PetsSelect widthProp='209px' inputName={"Животное"} placeholderName={"Нет"}/>
                    </MiddleInputsContainer>
                    <TextAreasContainer marginProp={check ? "0px" :"80px"}>
                        <AboutTextArea name='short'currentLength={valueShort.length} heightProp="57px" normalHeightProp={'74px'} TextAreaName="Краткая информация" placeholderName="Немножечко..." maxLength="99" onChangeFunc={handleChange}/>
                        <AboutTextArea name='long' currentLength={valueLong.length} heightProp="235px" normalHeightProp={'118px'} TextAreaName="О себе" placeholderName="Расскажите миру о вас!" maxLength="300" onChangeFunc={handleChange}/>
                    </TextAreasContainer>
                    
                    {check ? <ButtonFinish text="Сохранить изменения" handleClick={() => setCheck(!check)} /> : <></>}
            </AboutList>

            </BodyContainer>
            <Footer/>
        </Container>
    )
}