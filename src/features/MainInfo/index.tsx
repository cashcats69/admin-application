import styled from "@emotion/styled"
import female from '../../shared/icons/genderFemale.svg'
import male from '../../shared/icons/genderMale.svg'
import pet from '../../shared/icons/pet.svg'
export type TMainInfo = {
    aboutMe:string ,
    birthDate: string ,
    cityOfResidence: string,
    firstName: string,
    gender: string,
    hasPet: string,
    lastName: string,
    profileImage: string,
}
const Container = styled.div`
display:flex;
flex-direction:row;
width:1280px;
height:403px;
margin: 0 80px 0 80px;
@media(max-width:1368px){
    width:1000px;
}
@media(max-width:1150px){
    width:900px;
    margin: 0 40px 0 40px;
    }
@media(max-width:1000px){
    width:737px;
    margin: 0 0 0 10px;
    }
@media(max-width:768px){
    flex-direction:column;
    margin: 0 0 0 auto;
    width:304px;
    height:auto;
    }
`
const ImgUser = styled.img`
width:519px;
height:383px;
margin: 20px 0 0 0;
@media(max-width:1368px){
    width:419px;
}
@media(max-width:1150px){
    width:319px;
    }
@media(max-width:1000px){
    width:250px;
    }
@media(max-width:768px){
margin: 0 0 0 0;
width:304px;
height:200px;
}
`
const TextUserContainer = styled.div`
background:#FFFFFF;
width:761px;
height:383px;
@media(max-width:1368px){
    width:661px;
}
@media(max-width:1150px){
    width:561px;
    }
@media(max-width:1000px){
    width:461px;
    }
@media(max-width:768px){
    margin: 0 0 0 0;
    width:288px;
    height:482px;
    }
`
const FirstNameContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin: 40px 40px 0 40px;
@media(max-width:768px){
    justify-content:start;
    flex-direction:column;
    margin: 16px 0 0 16px;
    }
`
const FirstName = styled.p`
color: #585CC6;
font-family: Factor A;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
margin:0;
@media(max-width:768px){
font-size: 24px;
}
`
const DateUser = styled.p`
margin:0;
color: #8A8A8A;
font-family: Gilroy;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.01em;
text-align: left;
@media(max-width:768px){
font-size: 16px;
line-height: 22px;
}
`
const ParametersContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin:20px 0 0 40px;
@media(max-width:768px){
margin:16px 0 0 16px; 
}
`
const CityContainer = styled.div`
display:flex;
flex-direction:row;
`
const GenderContainer = styled.div`
display:flex;
flex-direction:row;
margin:0 40px 0 40px;
@media(max-width:768px){
    margin:0 16px 0 28px; 
    }
`
const AgeContainer = styled.div`
display:flex;
flex-direction:row;
margin:0;
@media(max-width:768px){
    margin:12px 0 0 0 ;
    }
`
const GenderImg = styled.img`
width:20px;
height:20px;
margin-left:4px;
@media(max-width:768px){
    width:16px;
    height:16px;
}
`
const PetImg = styled.img`
width:32px;
height:32px;
margin-right:12px;
@media(max-width:768px){
    margin-right:8px;
    width:24px;
    height:24px;
}
`
const AboutContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin:18px 40px 0 40px;
@media(max-width:768px){
margin:16px 16px 0 16px; 
}
`
const PetContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin:32px 40px 0 40px;
@media(max-width:1000px){
    width:250px;
    margin:16px 40px 0 40px;
    }
@media(max-width:768px){
margin:15px 16px 0 16px; 
}
`
const CourseText = styled.p`
font-family: Gilroy;
font-size: 18px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.01em;
text-align: left;
color: #333333;
margin:0;
@media(max-width:1000px){
font-size: 16px;
line-height: 22px;
}
`
const StandardText = styled.p`
color: #333333;
font-family: Gilroy;
font-size: 18px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.01em;
text-align: left;
color: #333333;
margin:0;
padding-left:5px;
@media(max-width:1000px){
font-size: 16px;
line-height: 22px;
}
`
const CourseSpan = styled.span`
font-family: Gilroy;
font-size: 18px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.01em;
text-align: left;
color: #333333;
margin:0;
@media(max-width:768px){
font-size: 16px;
line-height: 22px;
}
`

export const MainInfo:React.FC<TMainInfo> = ({aboutMe,birthDate,cityOfResidence,firstName,gender,hasPet,lastName,profileImage}) => {
    return(
        <Container>
            <ImgUser src={profileImage}/>
            <TextUserContainer>
                <FirstNameContainer>
                    <FirstName>{ firstName + ' ' + lastName}</FirstName>
                    <DateUser>{birthDate}</DateUser>
                </FirstNameContainer>
                <ParametersContainer>
                    <CityContainer>
                        <CourseText>Город:</CourseText><StandardText>{cityOfResidence}</StandardText>
                    </CityContainer>
                    <GenderContainer>
                        <CourseText>Пол:</CourseText><StandardText>{gender}</StandardText><GenderImg src={gender === 'Мужчина' ? male : female}/>
                    </GenderContainer>
                    <AgeContainer>
                        <CourseText>Возраст:</CourseText><StandardText>{birthDate}</StandardText>
                    </AgeContainer>
                </ParametersContainer>
                <AboutContainer>
                <StandardText><CourseSpan>О себе: </CourseSpan>{aboutMe}</StandardText>
                </AboutContainer>
                <PetContainer>
                    <PetImg src={pet}/><CourseText>Домашнее животное:</CourseText><StandardText>{hasPet}</StandardText>
                </PetContainer>
            </TextUserContainer>
        </Container>
    )
}