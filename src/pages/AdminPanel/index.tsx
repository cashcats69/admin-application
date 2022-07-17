/* eslint-disable array-callback-return */
import { useStore } from "effector-react";
import { useEffect, useRef, useState } from "react";
import { AdminHeader } from "../../features/AdminPanelHeader";
import { MembersFilter } from "../../features/MembersFilter";
import { MembersHeader } from "../../features/MembersHeader";
import { NoData } from "../../features/NoData";
import { PaginatedList } from "../../features/PaginatedList";
import { PaginatedMenu } from "../../features/PaginatedMenu";
import { User } from "../../features/User";
import { LoaderGlobal } from "../../processes/Loader";
import { Footer } from "../../shared/ui/Footer";
import { $LoaderStore, setStateEv } from "../../store/LoaderStore";
import { $UsersStore, getUsers } from "../../store/UsersStore";
import {
	StyledContaner,
	FilterContainer,
	StyledUsers,
	RadioContainer,
	ContainerButton,
	RadioButton,
	UsersList,
	BodyContainer,
	StyledMenu,
	Container,
} from "./styles";

export const AdminPanelMembers: React.FC = () => {
	useEffect(() => {
		setStateEv();
		getUsers().then(() => setStateEv());
	}, []);
	const usersStore = useStore($UsersStore);
	const loaderStore = useStore($LoaderStore);
	const [uStore, setUStore] = useState(usersStore);
	const [filterState, setFilterState] = useState("Все");
	const [currentPage, setCurrentPage] = useState(1);
	const paginate = (number: number) => setCurrentPage(number);
	const firstInput: React.MutableRefObject<HTMLInputElement | null> =
		useRef(null);
	const secondInput: React.MutableRefObject<HTMLInputElement | null> =
		useRef(null);
	const area: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
	const optionClick = (e: React.MouseEvent) => {
		if (
			firstInput.current !== null &&
			e.currentTarget.id === firstInput.current.id
		) {
			if (area.current) {
				area.current.scrollLeft = 0;
			}
		} else if (
			secondInput.current !== null &&
			e.currentTarget.id === secondInput.current.id
		) {
			if (area.current) {
				area.current.scrollLeft = 1000;
			}
		}
	};
	useEffect(() => {
		setUStore(usersStore);
	}, [usersStore]);

	const usersList = (
		<StyledContaner>
			<FilterContainer>
				<StyledUsers>Участники</StyledUsers>
				<RadioContainer>
					<MembersFilter
						state={filterState}
						setState={setFilterState}
						action={usersStore}
						setAction={setUStore}
					/>
					<ContainerButton>
						<RadioButton
							onClick={optionClick}
							ref={firstInput}
							id="01"
							type="radio"
							name="r"
							value="1"
						/>
						<RadioButton
							onClick={optionClick}
							ref={secondInput}
							id="02"
							type="radio"
							name="r"
							value="2"
						/>
					</ContainerButton>
				</RadioContainer>
			</FilterContainer>
			<UsersList ref={area}>
				<MembersHeader />
				{uStore.map((user, index) => {
					if (
						index + 1 <= 6 * currentPage &&
						index + 1 > (currentPage - 1) * 6
					) {
						return (
							<User
								profileImage={
									user.profileImage &&
									`https://academtest.ilink.dev/images/${user.profileImage}`
								}
								firstName={user.firstName}
								smallAboutMe={user.smallAboutMe}
								academyStatus={user.academyStatus}
								key={user.id}
								lastName={user.lastName}
							/>
						);
					}
				})}
			</UsersList>
			<PaginatedList
				uStore={uStore}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</StyledContaner>
	);
	const staticArea = (
		<>
			<BodyContainer>
				<StyledMenu>
					<PaginatedMenu currentPage={0} />
				</StyledMenu>
				{usersStore.length > 0 ? (
					usersList
				) : (
					<NoData text={"Здесь еще нет данных..."} />
				)}
			</BodyContainer>
		</>
	);
	return (
		<Container>
			<AdminHeader />
			{loaderStore ? <LoaderGlobal /> : staticArea}
			<Footer />
		</Container>
	);
};
