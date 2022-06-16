import styled from "@emotion/styled"
import noPhoto from "../../shared/icons/noPhoto.svg"
import editPhoto from "../../shared/icons/Edit.svg"
import rejectReview from '../../shared/icons/rejectedReview.svg'
import acceptedReview from '../../shared/icons/acceptedReview.svg'
import { TUserReviewCard, TColorProp, FilterReview, TButtonProp, TTextProp } from "../../interfaces"
import { useEffect, useState } from "react"
const Container = styled.div<TColorProp>(({colorProp}) => `
display:flex;
flex-direction:column;
width:519px;
height:363px;
background: ${colorProp};
margin:12px 12px 12px 12px;
@media(max-width:550px){
    width:288px;
height:374px;
    }
`)
const ReviewContainer = styled.div`
margin:24px;
@media(max-width:550px){
    margin:12px;
    }
`
const ProfileContainer = styled.div`
display:flex;
flex-direction:row;
`
const HeaderContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:24px;
@media(max-width:550px){
margin-bottom:0px;
flex-direction:column;
}
`
const DateContainer = styled.div`
margin:12px 0 12px 0;
`
const BodyContainer = styled.div`
height:155px;
margin-bottom:32px;
@media(max-width:550px){
    height:198px;
    margin-bottom:24px;
    }
`
const FooterContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
const ButtonsContainer = styled.div `
display:flex;
flex-direction:row;
`

const ProfileImg= styled.img`
width:52px;
height:52px;
background:#FFFFFF;
@media(max-width:550px){
width:40px;
height:40px;
    }
`
const ProfileName = styled.p`
font-family: Factor A TRIAL;
font-size: 24px;
font-weight: 500;
line-height: 28px;
letter-spacing: -0.0124em;
text-align: left;
color: #333333;
margin:auto 0 auto 20px;
align-items:center;
@media(max-width:550px){
margin:0 0 0 8px;
font-size: 16px;
line-height: 24px;
}
`
const HeaderDate = styled.p`
font-family: Factor A TRIAL;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #333333;
margin:0px;
@media(max-width:550px){
font-size: 10px;
font-weight: 400;
line-height: 14px;
    }
`
const BodyP = styled.p`
font-family: Gilroy;
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #333333;
margin:0px;
@media(max-width:550px){
    font-size: 12px;
    line-height: 20px;
        }
`
const ButtonPublish = styled.button<TButtonProp>(({displayProp}) => `
display:${displayProp};
background: #585CC6;
color:#FFFFFF;
border:none;
width:159px;
height:52px;
cursor:pointer;
@media(max-width:550px){
    width:108px;
    height:42px;
        }
`)
const ButtonReject = styled.button<TButtonProp>(({displayProp}) => `
display:${displayProp};
background: #EB5757;
color:#FFFFFF;
border:none;
width:148px;
height:52px;
margin-left:12px;
cursor:pointer;
@media(max-width:550px){
    margin-left:6px;
    width:102px;
    height:42px;
        }
`)
const ButtonEdit = styled.button`
background: #585CC6;
color:#FFFFFF;
border:none;
width:52px;
height:52px;
cursor:pointer;
@media(max-width:550px){
    width:42px;
    height:42px;
        }
`
const EditContainer = styled.div<TButtonProp>(({displayProp}) => `
display:${displayProp}`
)
const EndReview = styled.img<TButtonProp>(({displayProp}) =>`
display:${displayProp};
width:32px;
height:32px;
@media(max-width:990px){
width:20px;
height:20px;
}
`)
const EndText = styled.p<TTextProp>(({displayProp,colorProp}) => `
display:${displayProp};
color:${colorProp};
margin:0 0 0 14px;
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
line-height: 28px;
`)
export const ReviewCard:React.FC<TUserReviewCard> = ({id,avatar,name,surname,review,handleClick}) => {
    const [buttonsState,setButtonsState] = useState(true);
    const [reviewState,setReviewState] = useState<string | null>(null);
    const [buttonFinish,setButtonFinish] = useState(null);
console.log(buttonsState)
useEffect(() => {
    if(review.statusMessage !== FilterReview.unpublished){
        setButtonsState(false);
        if(review.statusMessage === FilterReview.published){
            setReviewState(acceptedReview)
        } else { setReviewState(rejectReview)}
    }
},[review])
    function setStatus(){
        
        if(review.statusMessage === FilterReview.published)  {return "#F8FFF6" }
        else if (review.statusMessage === FilterReview.rejected)  {return "#FDEEEE" }
        else {return "#F5F5F5"}
    }

    return(
        <Container colorProp={setStatus()}>
        <ReviewContainer>
            <HeaderContainer>
<ProfileContainer>
    <ProfileImg src={avatar ? avatar : noPhoto}></ProfileImg>
    <ProfileName>{name} {surname}</ProfileName>
</ProfileContainer>
<DateContainer><HeaderDate>{review.date.toLocaleDateString()}</HeaderDate></DateContainer>
</HeaderContainer>
<BodyContainer>
    <BodyP>{review.message}</BodyP>
</BodyContainer>
<FooterContainer>
    <ButtonsContainer>
        <EndReview displayProp={reviewState === null ? 'none' : 'block'} src={reviewState ? reviewState : ''}/>
        <EndText displayProp={buttonsState ? 'none' : 'block'} colorProp={reviewState === acceptedReview ? '#61BF4A' : '#EB5757'}>{reviewState === acceptedReview ? 'Отзыв опубликован' : 'Отзыв отклонен'}</EndText>
        <ButtonPublish name='publish' id={id.toString()} displayProp={buttonsState ? 'block' : 'none'} onClick={handleClick}>Опубликовать</ButtonPublish>
        <ButtonReject name="reject" id={id.toString()} displayProp={buttonsState ? 'block' : 'none'} onClick={handleClick}>Отклонить</ButtonReject>
    </ButtonsContainer>
<EditContainer displayProp={buttonsState ? 'block' : 'none'}>
    <ButtonEdit ><img alt="noPhoto" src={editPhoto}/></ButtonEdit>
</EditContainer>
</FooterContainer>
        </ReviewContainer>
        </Container>
    )
}