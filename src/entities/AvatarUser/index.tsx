import { IAvatarUser } from "../../shared/config";
import noPhoto from "../../shared/icons/noPhoto.svg";
import { Avatar } from "./styles";

export const AvatarUser: React.FC<IAvatarUser> = ({ currentImg }) => {
	return <Avatar src={currentImg ? currentImg : noPhoto}></Avatar>;
};
