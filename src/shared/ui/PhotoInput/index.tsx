import { memo } from "react";
import { TPhotoInput } from "../../config";
import changePhoto from "../../icons/ChangePhoto.svg";
import {
	PhotoContainer,
	ColPhoto,
	PhotoOwnContainer,
	PhotoOwnImg,
	HiddenDivImg,
	HiddenTriangle,
	HiddenDiv,
	HiddenPhoto,
	HeaderText,
	ChangeContainer,
	ChangePhoto,
	ChangeLink,
} from "./styles";
export const PhotoInput: React.FC<TPhotoInput> = memo(
	({ getValue, currentValue }) => {
		return (
			<PhotoContainer>
				<ColPhoto>
					<PhotoOwnContainer>
						<PhotoOwnImg src={currentValue ? currentValue : changePhoto} />
						<HiddenDivImg>
							<HiddenTriangle></HiddenTriangle>
							<HiddenDiv>
								<HiddenPhoto src={currentValue ? currentValue : changePhoto} />
							</HiddenDiv>
						</HiddenDivImg>
					</PhotoOwnContainer>
				</ColPhoto>
				<ColPhoto>
					<HeaderText>Фото профиля</HeaderText>
					<ChangeContainer>
						<ChangePhoto src={changePhoto} />
						<label htmlFor="fileInput">
							<input
								type="file"
								id="fileInput"
								hidden={true}
								onChange={getValue}
							/>
							<ChangeLink>Изменить фото</ChangeLink>
						</label>
					</ChangeContainer>
				</ColPhoto>
			</PhotoContainer>
		);
	}
);
