import styled from "@emotion/styled"
import { IAvatarUser } from "../../interfaces"
import noPhoto from '../../shared/icons/noPhoto.svg'

export const AvatarUser:React.FC<IAvatarUser> = ({currentImg}) => {
    const Avatar = styled.img`
    width:40px;
    height:40px;
    margin:0;
    padding:0;
    @media(max-width:768px){
    width:20px;
    height:20px;
    }
    `
    return(
        <Avatar src={currentImg ? currentImg : noPhoto}></Avatar>
        )
}