import styled from "@emotion/styled"
import { memo } from "react"
import { AvatarUser } from "../../entities/AvatarUser"
import { BriefUser } from "../../entities/BriefUser"
import { NameUser } from "../../entities/NameUser"
import { StatusUser } from "../../entities/StatusUser"
import { TUserAdmin } from "../../interfaces"

export const User:React.FC<TUserAdmin> = memo(({profileImage,firstName,lastName,smallAboutMe,academyStatus}) =>{
    const ContainerUser = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:24px;
    border-bottom: 1px dotted #E0E0E0;
    @media(max-width:768px){
    width:732px;
    }
    &:last-of-type{
    border-bottom:0;
    }
    `
    const ContainerAvatar = styled.div`
    width:195px;
    display:flex;
    flex-direction:row;
    `
    return (
        <ContainerUser>
<ContainerAvatar>
<AvatarUser currentImg={profileImage}/>
<NameUser firstName={firstName} lastName={lastName}/>
</ContainerAvatar>
<BriefUser smallAboutMe={smallAboutMe}/>
<StatusUser academyStatus={academyStatus}/>
        </ContainerUser>
    )
})