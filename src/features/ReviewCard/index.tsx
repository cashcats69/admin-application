import styled from "@emotion/styled"
import noPhoto from "../../shared/icons/noPhoto.svg"
import editPhoto from "../../shared/icons/Edit.svg"
import rejectReview from '../../shared/icons/rejectedReview.svg'
import acceptedReview from '../../shared/icons/acceptedReview.svg'
import { TUserReviewCard, TColorProp, FilterReview, TButtonProp, TTextProp } from "../../interfaces"
import { useEffect, useState } from "react"
import { ButtonPublish, ButtonReject } from "../../shared/ui/ButtonReview"
const Container = styled.div<TColorProp>(({colorProp}) => `
display:flex;
outline:none;
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
outline:none;
@media(max-width:550px){
    margin:12px;
    }
`
const ProfileContainer = styled.div`
display:flex;
flex-direction:row;
outline:none;
`
const HeaderContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:24px;
outline:none;
@media(max-width:550px){
margin-bottom:0px;
flex-direction:column;
}
`
const DateContainer = styled.div`
margin:12px 0 12px 0;
outline:none;
`
const BodyContainer = styled.div`
height:155px;
margin-bottom:32px;
outline:none;
@media(max-width:550px){
    height:198px;
    margin-bottom:24px;
    }
`
const FooterContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
outline:none;
`
const ButtonsContainer = styled.div `
display:flex;
flex-direction:row;
outline:none;
`

const ProfileImg= styled.img`
width:52px;
height:52px;
background:#FFFFFF;
outline:none;
@media(max-width:550px){
width:40px;
height:40px;
    }
`
const ProfileName = styled.p`
font-family: 'Factor A';
font-size: 24px;
font-weight: 500;
line-height: 28px;
letter-spacing: -0.0124em;
text-align: left;
color: #333333;
margin:auto 0 auto 20px;
align-items:center;
outline:none;
@media(max-width:550px){
margin:0 0 0 8px;
font-size: 16px;
line-height: 24px;
}
`
const HeaderDate = styled.p`
font-family: 'Factor A';
font-size: 14px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #333333;
margin:0px;
outline:none;
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
outline:none;
@media(max-width:550px){
    font-size: 12px;
    line-height: 20px;
        }
`
const ButtonEdit = styled.button`
background: #585CC6;
outline:none;
color:#FFFFFF;
outline:none;
border:none;
width:52px;
height:52px;
cursor:pointer;
&:hover{
background-image:url(${editPhoto})
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 50% 50%;
transition: background-size .5s;

}
background-image:url(${editPhoto});
background-position:center;
background-repeat:no-repeat;
@media(max-width:550px){
    width:42px;
    height:42px;
        }
`
const EditContainer = styled.div<TButtonProp>(({displayProp}) => `
display:${displayProp};
outline:none;
`
)
const EndReview = styled.img<TButtonProp>(({displayProp}) =>`
display:${displayProp};
width:32px;
height:32px;
outline:none;
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
outline:none;
`)
export const ReviewCard:React.FC<TUserReviewCard> = ({id,authorName,authorImage,createdAt,deletedAt,updatedAt,status,version,text,handleClick,title}) => {
    const [buttonsState,setButtonsState] = useState(true);
    const [reviewState,setReviewState] = useState<string | null>(null);
useEffect(() => {
    if(status !== FilterReview.unpublished){
        setButtonsState(false);
        if(status === FilterReview.published){
            setReviewState(acceptedReview)
        } else { setReviewState(rejectReview)}
    }
},[status])
    function setStatus(){
        
        if(status === FilterReview.published)  {return "#F8FFF6" }
        else if (status === FilterReview.rejected)  {return "#FDEEEE" }
        else {return "#F5F5F5"}
    }

    return(
        <Container colorProp={setStatus()}>
        <ReviewContainer>
            <HeaderContainer>
<ProfileContainer>
    <ProfileImg src={authorImage ? authorImage : noPhoto}></ProfileImg>
    <ProfileName>{authorName}</ProfileName>
</ProfileContainer>
<DateContainer><HeaderDate>{createdAt !== null ? new Date(createdAt).toLocaleDateString(): ''}</HeaderDate></DateContainer>
</HeaderContainer>
<BodyContainer>
    <BodyP>{text}</BodyP>
</BodyContainer>
<FooterContainer>
    <ButtonsContainer>
        <EndReview displayProp={reviewState === null ? 'none' : 'block'} src={reviewState ? reviewState : ''}/>
        <EndText displayProp={buttonsState ? 'none' : 'block'} colorProp={reviewState === acceptedReview ? '#61BF4A' : '#EB5757'}>{reviewState === acceptedReview ? 'Отзыв опубликован' : 'Отзыв отклонен'}</EndText>
        <ButtonPublish name='publish' id={id} displayProp={buttonsState ? 'block' : 'none'} onClick={handleClick}>Опубликовать</ButtonPublish>
        <ButtonReject name="reject" id={id} displayProp={buttonsState ? 'block' : 'none'} onClick={handleClick}>Отклонить</ButtonReject>
    </ButtonsContainer>
<EditContainer displayProp={buttonsState ? 'block' : 'none'}>
    <ButtonEdit name='edit' id={id} onClick={handleClick}></ButtonEdit>
</EditContainer>
</FooterContainer>
        </ReviewContainer>
        </Container>
    )
}