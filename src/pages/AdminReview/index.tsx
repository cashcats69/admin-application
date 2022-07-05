/* eslint-disable array-callback-return */
import styled from "@emotion/styled"
import { useEvent, useStore } from "effector-react"
import { useEffect, useState } from "react"
import { AdminHeader } from "../../features/AdminPanelHeader"
import { NoData } from "../../features/NoData"
import { PaginatedMenu } from "../../features/PaginatedMenu"
import { ReviewCard } from "../../features/ReviewCard"
import { ReviewPopup } from "../../features/ReviewPopup"
import { ReviewsFilter } from "../../features/ReviewsFilter"
import {  iRealStore, TContainer, TEditReview, TUpdateStatus } from "../../interfaces"
import { AlarmReview } from "../../processes/AlarmReview"
import { LoaderGlobal } from "../../processes/Loader"
import { Footer } from "../../shared/ui/Footer"
import { authFalse } from "../../store/AuthStore"
import { $LoaderStore, setStateEv } from "../../store/LoaderStore"
import { $RealUsersStore, getReviews} from "../../store/UsersStore"

const Container = styled.div<TContainer>(({overflowProp}) =>`
background-color: #FFFFFF;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
position:relative;
font-size: calc(10px + 2vmin);
color: white;
overflow-x: hidden;
overflow-y: ${overflowProp};
`)
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
@media(max-width:820px){
    width:230px;
}
@media(max-width:768px){
    width:100%;
}
`
const StyledUsers = styled.p`
margin: 43px 0 40px 0;
font-family: 'Factor A' ;
font-size: 32px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: #333333;
width:95%;
@media(max-width:768px){
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    
margin: 26px  auto 16px auto;

}
`
const FilterContainer = styled.div`
    margin-top:16px;
    max-width:1073px;
    height:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
    @media(max-width:768px){
        width:98%;
        flex-direction:column;
        justify-content:start;
        align-items:normal;
        margin: 0 auto 16px auto;
    }
    `

const UsersList = styled.div`
width:100%;
max-width:1103px;
min-width:320px;
margin-left:24px;
@media(max-width:990px){
    margin-left:0;
}
@media(max-width:768px){
    width:100%;


`
const ReviewsList = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
overflow-y: scroll;
width:100%;
height:750px;
margin-bottom:75px;
@media(max-width:768px){
    width:100%;
    flex-wrap:nowrap;
    flex-direction:column;
    align-items:center;
}
`

export const updateStatus = async (data:TUpdateStatus):Promise<Response> => {
    const url = `https://academtest.ilink.dev/reviews/updateStatus/${data.id}`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: new URLSearchParams({
            "status": data.status
        })
    })
    return response
}
export const editReview = async (data:TEditReview) => {
    const url = `https://academtest.ilink.dev/reviews/updateInfo/${data.id}`
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: new URLSearchParams({
            text: data.text
        })
    })
    return response
}
export const AdminReview:React.FC = () => {
    const authFalseFn = useEvent(authFalse)
    const realUsersStore = useStore($RealUsersStore);
    const loaderStore = useStore($LoaderStore)
    const [uStore,setUStore] = useState(realUsersStore); 
    const [modal,setModal] = useState<iRealStore>();
    const [filterState,setFilterState] = useState('Сначала неопубликованные');
    const [isOpen, setIsOpen] = useState(false);
    const [check,setCheck] = useState(true);
    const [theme,setTheme] = useState<'edit'|'send'>('send');
    const [typePop,setTypePop] = useState(true);
    const [loader,setLoader] = useState(false);
    useEffect(() =>{
        getReviews()
    },[]);
    useEffect(() => {
        setUStore(realUsersStore)
    },[realUsersStore])

    const filterReviews = (newAction: iRealStore[],value: string) => { 
        setUStore(newAction); 
        setFilterState(value); 
    } 

    const finishEdit = async (content:string) => {
        setTheme('edit');
        if(typeof(modal) !== "undefined"){
        setLoader(true);
        const response =  await editReview({id: modal.id, text:content});
        if(response.ok){setCheck(false); setTypePop(true); setLoader(false);} 
            else if(response.status === 401){authFalseFn(); setCheck(false); setTypePop(false); setLoader(false);}
                else{ setCheck(false); setTypePop(false); setLoader(false);}
        setIsOpen(!isOpen);
                
setTimeout(() => {setCheck(true); getReviews() }, 2000);
    }
    }
    //any плохой тон, но я не придумал, как запихнуть в функцию отслеживание клика по кнопке и блоку без багов
    //Делить на две функции не стал
const toggling = (e:React.SyntheticEvent & {target:any}) => {if(e.target.id === 'outsideModal' || e.target.name === 'reject' || e.target.name ==='edit'){setIsOpen(!isOpen)}}
    
const finishReview = async (e:React.SyntheticEvent<HTMLButtonElement>) => {
        
        if(e.currentTarget.name === 'reject'){
            setTheme('send');
                const response =  await updateStatus({id: e.currentTarget.id, status: 'declined'})
                if(response.ok){setCheck(false); setTypePop(true)} 
                else if(response.status === 401){authFalseFn(); setCheck(false); setTypePop(false); } 
                else {setCheck(false); setTypePop(false); }
                setTimeout(() => {setCheck(true); getReviews() }, 2000)

        }else if(e.currentTarget.name === 'publish'){
            setTheme('send');
            const response =  await updateStatus({id: e.currentTarget.id, status: 'approved'})
            if(response.ok){setCheck(false); setTypePop(true)} 
            else if(response.status === 401){authFalseFn(); setCheck(false); setTypePop(false); } 
            else {setCheck(false); setTypePop(false) }
            setTimeout(() => {setCheck(true); getReviews() }, 2000)
        }
        else{
            uStore.map(user => {if(user.id === e.currentTarget.id){

                const userEdit = {...user,}
                setModal(userEdit)
                toggling(e)
            }})
        }
    }
    const reviewsList = <UsersList><FilterContainer><StyledUsers>Отзывы</StyledUsers><ReviewsFilter state={filterState} action={realUsersStore} handleClick={filterReviews} /></FilterContainer> 
                <ReviewsList>
                {uStore.map(user => { if(user) return (
                    <ReviewCard id={user.id} authorImage={user.authorImage && `https://academtest.ilink.dev/images/${user.authorImage}`} authorName={user.authorName} status={user.status} key={user.id} handleClick={finishReview} createdAt={user.createdAt} deletedAt={user.deletedAt} updatedAt={user.updatedAt} version={user.version} text={user.text} title={user.title}/>
                )})}
                </ReviewsList></UsersList>
    const staticArea = <><BodyContainer><StyledMenu><PaginatedMenu currentPage={1}/></StyledMenu>
    {uStore.length > 0 ? reviewsList : <NoData text={"Здесь еще нет отзывов..."}/>}
</BodyContainer>
{!check && <AlarmReview theme={theme} typePop={typePop} setCheck={setCheck}/>}

</>
    return(
        <Container overflowProp={isOpen ? 'hidden' : 'visible' }>
            {isOpen ? <ReviewPopup loader={loader} content={modal ? modal.text : ''} toggleModal={toggling} finishEdit={finishEdit}/> : <></>}
            <AdminHeader/>
            
            {loaderStore ? <LoaderGlobal/> : staticArea}
            <Footer/>
        </Container>
    )
}