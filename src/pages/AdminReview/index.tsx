/* eslint-disable array-callback-return */
import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { AdminHeader } from "../../features/AdminPanelHeader";
import { NoData } from "../../features/NoData";
import { PaginatedMenu } from "../../features/PaginatedMenu";
import { ReviewCard } from "../../features/ReviewCard";
import { ReviewPopup } from "../../features/ReviewPopup";
import { ReviewsFilter } from "../../features/ReviewsFilter";
import {
  iRealStore,
  TEditReview,
  TUpdateStatus,
} from "../../shared/config";
import { AlarmReview } from "../../processes/AlarmReview";
import { LoaderGlobal } from "../../processes/Loader";
import { Footer } from "../../shared/ui/Footer";
import { checkAuth } from "../../store/AuthStore";
import { $LoaderStore } from "../../store/LoaderStore";
import { $RealUsersStore, getReviews } from "../../store/UsersStore";
import { UsersList, FilterContainer, StyledUsers, ReviewsList, BodyContainer, StyledMenu, Container } from "./styles";


export const updateStatus = async (data: TUpdateStatus): Promise<Response> => {
  const url = `https://academtest.ilink.dev/reviews/updateStatus/${data.id}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: new URLSearchParams({
      status: data.status,
    }),
  });
  return response;
};
export const editReview = async (data: TEditReview) => {
  const url = `https://academtest.ilink.dev/reviews/updateInfo/${data.id}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: new URLSearchParams({
      text: data.text,
    }),
  });
  return response;
};
export const AdminReview: React.FC = () => {
  const realUsersStore = useStore($RealUsersStore);
  const loaderStore = useStore($LoaderStore);
  const [uStore, setUStore] = useState(realUsersStore);
  const [modal, setModal] = useState<iRealStore>();
  const [filterState, setFilterState] = useState("Сначала неопубликованные");
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(true);
  const [theme, setTheme] = useState<"edit" | "send">("send");
  const [typePop, setTypePop] = useState(true);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getReviews();
  }, []);
  useEffect(() => {
    setUStore(realUsersStore);
  }, [realUsersStore]);

  const filterReviews = (newAction: iRealStore[], value: string) => {
    setUStore(newAction);
    setFilterState(value);
  };

  const finishEdit = async (content: string) => {
    setTheme("edit");
    if (typeof modal !== "undefined") {
      setLoader(true);
      const response = await editReview({ id: modal.id, text: content });
      if (response.ok) {
        setCheck(false);
        setTypePop(true);
        setLoader(false);
      } else if (response.status === 401) {
        checkAuth()
        setCheck(false);
        setTypePop(false);
        setLoader(false);
      } else {
        setCheck(false);
        setTypePop(false);
        setLoader(false);
      }
      setIsOpen(!isOpen);

      setTimeout(() => {
        setCheck(true);
        getReviews();
      }, 2000);
    }
  };
  //any плохой тон, но я не придумал, как запихнуть в функцию отслеживание клика по кнопке и блоку без багов
  //Делить на две функции не стал
  const toggling = (e: React.SyntheticEvent & { target: any }) => {
    if (
      e.target.id === "outsideModal" ||
      e.target.name === "reject" ||
      e.target.name === "edit"
    ) {
      setIsOpen(!isOpen);
    }
  };

  const finishReview = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === "reject") {
      setTheme("send");
      const response = await updateStatus({
        id: e.currentTarget.id,
        status: "declined",
      });
      if (response.ok) {
        setCheck(false);
        setTypePop(true);
      } else if (response.status === 401) {
        checkAuth()
        setCheck(false);
        setTypePop(false);
      } else {
        setCheck(false);
        setTypePop(false);
      }
      setTimeout(() => {
        setCheck(true);
        getReviews();
      }, 2000);
    } else if (e.currentTarget.name === "publish") {
      setTheme("send");
      const response = await updateStatus({
        id: e.currentTarget.id,
        status: "approved",
      });
      if (response.ok) {
        setCheck(false);
        setTypePop(true);
      } else if (response.status === 401) {
        checkAuth()
        setCheck(false);
        setTypePop(false);
      } else {
        setCheck(false);
        setTypePop(false);
      }
      setTimeout(() => {
        setCheck(true);
        getReviews();
      }, 2000);
    } else {
      uStore.map((user) => {
        if (user.id === e.currentTarget.id) {
          const userEdit = { ...user };
          setModal(userEdit);
          toggling(e);
        }
      });
    }
  };
  const reviewsList = (
    <UsersList>
      <FilterContainer>
        <StyledUsers>Отзывы</StyledUsers>
        <ReviewsFilter
          state={filterState}
          action={realUsersStore}
          handleClick={filterReviews}
        />
      </FilterContainer>
      <ReviewsList>
        {uStore.map((user) => {
          if (user)
            return (
              <ReviewCard
                id={user.id}
                authorImage={
                  user.authorImage &&
                  `https://academtest.ilink.dev/images/${user.authorImage}`
                }
                authorName={user.authorName}
                status={user.status}
                key={user.id}
                handleClick={finishReview}
                createdAt={user.createdAt}
                deletedAt={user.deletedAt}
                updatedAt={user.updatedAt}
                version={user.version}
                text={user.text}
                title={user.title}
              />
            );
        })}
      </ReviewsList>
    </UsersList>
  );
  const staticArea = (
    <>
      <BodyContainer>
        <StyledMenu>
          <PaginatedMenu currentPage={1} />
        </StyledMenu>
        {uStore.length > 0 ? (
          reviewsList
        ) : (
          <NoData text={"Здесь еще нет отзывов..."} />
        )}
      </BodyContainer>
      {!check && (
        <AlarmReview theme={theme} typePop={typePop} setCheck={setCheck} />
      )}
    </>
  );
  return (
    <Container overflowProp={isOpen ? "hidden" : "visible"}>
      {isOpen ? (
        <ReviewPopup
          loader={loader}
          content={modal ? modal.text : ""}
          toggleModal={toggling}
          finishEdit={finishEdit}
        />
      ) : (
        <></>
      )}
      <AdminHeader />

      {loaderStore ? <LoaderGlobal /> : staticArea}
      <Footer />
    </Container>
  );
};
