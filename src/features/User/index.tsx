import styled from "@emotion/styled"
import { memo } from "react"
import { AvatarUser } from "../../entities/AvatarUser"
import { BriefUser } from "../../entities/BriefUser"
import { NameUser } from "../../entities/NameUser"
import { StatusUser } from "../../entities/StatusUser"
import { TUserAdmin } from "../../interfaces"

export const User:React.FC<TUserAdmin> = memo(({avatar,name,surname,description,status}) =>{
    const ContainerUser = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:24px;
    `
    const ContainerAvatar = styled.div`
    width:195px;
    display:flex;
    flex-direction:row;
    `
    return (
        <ContainerUser>
<ContainerAvatar>
<AvatarUser currentImg={avatar}/>
<NameUser name={name} surName={surname}/>
</ContainerAvatar>
<BriefUser brief={description}/>
<StatusUser statusU={status}/>
        </ContainerUser>
    )
})