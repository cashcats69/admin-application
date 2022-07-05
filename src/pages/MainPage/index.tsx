import styled from "@emotion/styled";
import { useEvent, useStore } from "effector-react";
import { useState, useEffect, useRef } from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { MainCard } from "../../features/MainCard";
import { MainHeader } from "../../features/MainHeader";
import { MainInfo } from "../../features/MainInfo";
import { FilterReview, TMakeReview } from "../../interfaces";
import { $userStore } from "../../store/AboutStore";
import { $RealUsersStore, getReviews } from "../../store/UsersStore";
import { Footer } from "../../shared/ui/Footer";
import plus from "../../shared/icons/plus.svg";
import prev from "../../shared/icons/prev.svg";
import next from "../../shared/icons/next.svg";
import nextActive from "../../shared/icons/nextActive.svg";
import vectorBack from "../../shared/icons/VectorBack.svg"

import { SwiperButtonPrev, SwiperButtonNext } from "../../processes/SwiperButtons";
import { authFalse } from "../../store/AuthStore";
import { AddReview } from "../../features/AddReview";
import { AlarmReview } from "../../processes/AlarmReview";
import { LoaderGlobal } from "../../processes/Loader";
import { $LoaderStore } from "../../store/LoaderStore";
const Container = styled.div`
background:#585CC6;
background-image:url(${vectorBack});
background-repeat:no-repeat;
background-position:top right;
@media(max-width:768px){
    background-position:120px 0%;
}
`
const WelcomeDiv = styled.div`
margin: 93px 80px 88px 80px;
@media(max-width:768px){
margin: 43px 16px 64px 16px;
}
`
const WelcomeText = styled.p`

font-family: Factor A;
font-size: 124px;
font-weight: 500;
line-height: 148px;
letter-spacing: -0.0124em;
text-align: left;
color:#FFFFFF;
@media(max-width:768px){
margin: 0 auto 0 auto;
font-size:48px;
line-height:54px;
}
`
const ReviewsContainer = styled.div`
width:1200px;
height:525px;
background: #FFFFFF;
margin:120px 0 106px 0;
@media(max-width:1368px){
    width:1000px;
}
@media(max-width:1150px){
    width:850px;
    }
@media(max-width:1000px){
    width:600px;
    }
@media(max-width:768px){
width:304px;
height:479px;
margin:57px 0 82px 0;
}
`
const SliderContainer = styled.div`
display:flex;
flex-direction:row;
height: 310px;
border-radius: 2px;
margin: 0 56px 32px 80px;
@media(max-width:1368px){
    height:379px;
    width:auto;
    margin: 0 28px 32px 40px;
}
@media(max-width:1150px){
    margin: 0 40px 0 0px;
    }
@media(max-width:768px){
    height: 400px;
    margin: 0 ;
}
`
const ReviewsHeader = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding: 74px 56px 56px 80px;
@media(max-width:1368px){
    
    padding: 37px 16px 28px 16px;
}
@media(max-width:768px){
    
    padding: 20px 16px 21px 16px;
}
`
const HeaderText = styled.p`
font-family: Factor A;
font-size: 68px;
font-weight: 500;
line-height: 88px;
text-align: left;
color: #333333;
margin:0;
@media(max-width:768px){
font-size: 32px;
line-height: 42px;
}
`
const ReviewsAddBlock = styled.button`
display:flex;
flex-direction:row;
width:220px;
height:52px;
background:#585CC6;
outline:none;
border: 0;
cursor:pointer;
padding:0;
background-size: 0% 100%;
&:hover{
background-image: linear-gradient(#797DDF, #797DDF);
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 100% 100%;
transition: background-size .5s, color .5s;
}
@media(max-width:768px){
width:42px;
height:42px;
}
`
const BottomContainer = styled.div`
display:flex;
flex-direction:row;

`
const Blockplus = styled.img`
width:18px;
height:18px;
margin:17px 10px 17px 28px;
@media(max-width:768px){
margin:12px 12px 12px 12px;
}
`
const BlockText = styled.p`
font-family: Gilroy;
font-size: 18px;
font-weight: 600;
line-height: 18px;
text-align: left;
color:#FFFFFF;
@media(max-width:768px){
display:none;
}
`
const ButtonsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-end;
width:128px;
margin:120px 0 106px 34px;
@media(max-width:768px){
    display:none;
}
`
const ButtonNext = styled.button`
background:#FFFFFF;
width:56px;
height:56px;
outline:none;
cursor:pointer;
border:none;
background-image:url(${next});
background-repeat:no-repeat;
background-position:center;
&:hover{
    background-image:url(${nextActive});
}
`
const ButtonPrev = styled.button`
background:#FFFFFF;
width:56px;
height:56px;
outline:none;
cursor:pointer;
border:none;
background-image:url(${prev});
background-repeat:no-repeat;
background-position:center;
&:hover{
    background-image:url(${nextActive});
    transform: scale(-1, 1);
}
`
export const makeReviewReq = async (data:{authorName:string,content:string,captchaKey:string,captchaValue:string,}) => {
    const url = `https://academtest.ilink.dev/reviews/create`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            authorName:data.authorName,
            title:'SomethingSpecialBooooo',
            text: data.content,
            captchaKey:data.captchaKey,
            captchaValue:data.captchaValue,
        })
    })
    return response
}
export const updatePhoto = async (id: string, image: File) => {
    const urlString = `https://academtest.ilink.dev/reviews/updatePhoto/${id}`;
    const data = new FormData()
    data.append("authorImage", image);
    const request = await fetch(urlString, {
        method: "POST",
        body: data
    })
    return request;
}
export const Main:React.FC = () => {
    const loaderStore = useStore($LoaderStore)
    const [typePop,setTypePop] = useState(true);
    const userData = useStore($userStore);
    const reviews = useStore($RealUsersStore);
    const [loader,setLoader] = useState(false);
    const authFalseFn = useEvent(authFalse);
    const publishedReviews = reviews.filter(item => item.status === FilterReview.published).sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    const [firstName, setFirstname] = useState<string | null>('');
    const [lastName, setLastname] = useState<string | null>('');
    const [date, setDate] = useState<string | null>('');
    const [city, setCity] = useState<string | null>('');
    const [gender, setGender] = useState<string | null>('male');
    const [pet, setPet] = useState<boolean>(true);
    const [aboutMe, setAboutMe] = useState<string | null>('');
    const [image, setImage] = useState('');
    const [windowInnerWidth,setWindowInnerWidth] = useState<number>(window.innerWidth);
    const nextRef:React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const prevRef:React.MutableRefObject<HTMLButtonElement | null> = useRef(null)
    const [check,setCheck] = useState(true);
    const [theme,setTheme] = useState<'edit'|'send'>('send');
    const [isOpen, setIsOpen] = useState(false);
    //any плохой тон, но я не придумал, как запихнуть в функцию отслеживание клика по кнопке и блоку без багов
    //Делить на две функции не стал
    const toggling = (e:React.SyntheticEvent & {target:any}) => { if(e.target.id === 'outsideModal' || e.currentTarget.id === 'add' || e.target.id ==='exit'){setIsOpen(!isOpen)}}
    useEffect(() => {
        getReviews()
    },[])
    useEffect(() =>{ setFirstname(userData.firstName); setLastname(userData.lastName); setDate(formatDate(userData.birthDate));
        setCity(userData.cityOfResidence); setGender(userData.gender ? userData.gender : 'male'); setPet(userData.hasPet ? userData.hasPet : true);
        setAboutMe(userData.aboutMe); setImage("https://academtest.ilink.dev/images/" + userData.profileImage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userData]);
    function padTo2Digits(num:number) {
        return num.toString().padStart(2, '0');
    }
    function formatDate(date:string | null) {
        if(date !== null){
        const edited =  new Date(date)
        return [
        padTo2Digits(edited.getDate()),
        padTo2Digits(edited.getMonth() + 1),
        edited.getFullYear(),
        ].join('.');
    }else{
        return null
    }
    }
    const makeReview = async (content:TMakeReview) => {
        setTheme('edit');
        setLoader(true);
        const response =  await makeReviewReq(content);
        const data = await response.json()
        if(response.ok){
            if(content.imageFile !== null && content.imageFile.size < 1024 * 1024 * 5){
                const imgResponse = await updatePhoto(data.id,content.imageFile)
                if(imgResponse.ok){
                    setCheck(false); setTypePop(true); setLoader(false); setIsOpen(!isOpen);;
                }else if(imgResponse.status === 401){
                    authFalseFn(); setCheck(false); setTypePop(false); setLoader(false); setIsOpen(!isOpen);
                }else{
                    setCheck(false); setTypePop(false); setLoader(false); setIsOpen(!isOpen);
                }
            }else{setCheck(false); setTypePop(true); setLoader(false); setIsOpen(!isOpen);} }
        else if(response.status === 401){authFalseFn(); setCheck(false); setTypePop(false); setLoader(false); setIsOpen(!isOpen);}
        else{ setCheck(false); setTypePop(false); setLoader(false); setIsOpen(!isOpen);}

    setTimeout(() => {getReviews(); setCheck(true);}, 2000);
    }
//window.onresize это плохой тон, но я ничего не нашел для отслеживания размера экрана в реальном времени для ts
//Это нужно для слайдера
    let currentWidth:number;
    window.onresize = (() => {
        currentWidth = window.innerWidth;
        if(currentWidth < 768){
        setWindowInnerWidth(767)
        } else if(currentWidth > 768){
        setWindowInnerWidth(769)
        }
    })
const staticArea = <> <WelcomeDiv><WelcomeText>Добро пожаловать в академию!</WelcomeText></WelcomeDiv>
<MainInfo aboutMe={aboutMe ? aboutMe : ''} birthDate={date ? date : ""} cityOfResidence={city ? city : ''} firstName={firstName ? firstName : ''} gender={gender === 'male' ? 'Мужчина' : 'Женщина'} hasPet={pet ? 'Есть' : 'Нет'} lastName={lastName ? lastName : ''} profileImage={image ? image : ''}/>
<BottomContainer>
<ReviewsContainer>
    <ReviewsHeader>
        <HeaderText>Отзывы</HeaderText>
        <ReviewsAddBlock id="add" onClick={toggling}>
            <Blockplus src={plus}/>
            <BlockText>Добавить отзыв</BlockText>
        </ReviewsAddBlock>
    </ReviewsHeader>
<SliderContainer>
<Swiper 
slidesPerView={windowInnerWidth > 768 ? 2 : 1}
spaceBetween={windowInnerWidth > 768 ? 12 : 0}
slidesPerGroup={windowInnerWidth > 768 ? 2 : 1}
loop={true}
loopFillGroupWithBlank={true}
pagination={{
clickable: true,
}}
modules={[Pagination, Navigation]}
>
    <SwiperButtonPrev refOb={prevRef}>Slide</SwiperButtonPrev>
    <SwiperButtonNext refOb={nextRef}>Slide</SwiperButtonNext>
    {publishedReviews.map(review => {return(
        <SwiperSlide key={review.id}><MainCard text={review.text} authorImage={review.authorImage} authorName={review.authorName} createdAt={review.createdAt}/></SwiperSlide>
    )})}
</Swiper >
</SliderContainer>
</ReviewsContainer>
<ButtonsContainer>
    <ButtonPrev onClick={() => prevRef.current?.click()}></ButtonPrev>
    <ButtonNext onClick={() => nextRef.current?.click()}></ButtonNext>
</ButtonsContainer>
</BottomContainer></>
    return(
        <Container>
            {isOpen ? <AddReview loader={loader} toggleModal={toggling} makeReview={makeReview}/> : <></>}
        <MainHeader/>
        {loaderStore ? <LoaderGlobal/> : staticArea}
        {!check && <AlarmReview theme={theme} typePop={typePop} setCheck={setCheck}/>}
        <Footer/>
        </Container>
    )
}

