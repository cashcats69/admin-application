import { memo } from "react";
import { AvatarUser } from "../../entities/AvatarUser";
import { BriefUser } from "../../entities/BriefUser";
import { NameUser } from "../../entities/NameUser";
import { StatusUser } from "../../entities/StatusUser";
import { TUserAdmin } from "../../shared/config";
import { ContainerUser, ContainerAvatar } from "./styles";

export const User: React.FC<TUserAdmin> = memo(
	({ profileImage, firstName, lastName, smallAboutMe, academyStatus }) => {
		return (
			<ContainerUser>
				<ContainerAvatar>
					<AvatarUser currentImg={profileImage} />
					<NameUser firstName={firstName} lastName={lastName} />
				</ContainerAvatar>
				<BriefUser smallAboutMe={smallAboutMe} />
				<StatusUser academyStatus={academyStatus} />
			</ContainerUser>
		);
	}
);
