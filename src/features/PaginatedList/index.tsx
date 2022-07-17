import { IPaginatedList } from "../../shared/config";
import { PaginatedContainer, PaginatedUl, PaginatedArrowLeft, CurrentLi, PaginatedA, PaginatedLi, PaginatedArrowRight } from "./styles";
export const PaginatedList: React.FC<IPaginatedList> = ({
  uStore,
  currentPage,
  paginate,
}) => {
  const usersPerPage = 6;

  const pageNumbers: number[] = [];
  const makeButtons = () => {
    for (
      let counter = 1;
      counter < Math.ceil(uStore.length / usersPerPage) + 1;
      counter++
    ) {
      pageNumbers.push(counter);
    }
  };
  makeButtons();
  if (uStore.length !== 0) {
    return (
      <PaginatedContainer>
        <PaginatedUl>
          <PaginatedArrowLeft
            colorProp={currentPage === 1 ? "#C4C4C4" : "#FFFFFF"}
            onClick={(event) => {
              event?.preventDefault();
              if (currentPage !== 1) {
                paginate(currentPage - 1);
              }
            }}
          ></PaginatedArrowLeft>
          {pageNumbers.map((number) => {
            if (number === currentPage) {
              return (
                <CurrentLi
                  key={number}
                  onClick={(event) => {
                    event?.preventDefault();
                    paginate(number);
                  }}
                >
                  <PaginatedA
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    {number}
                  </PaginatedA>
                </CurrentLi>
              );
            } else {
              return (
                <PaginatedLi
                  key={number}
                  onClick={(event) => {
                    event?.preventDefault();
                    paginate(number);
                  }}
                >
                  <PaginatedA
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                    }}
                  >
                    {number}
                  </PaginatedA>
                </PaginatedLi>
              );
            }
          })}
          <PaginatedArrowRight
            colorProp={currentPage === 2 ? "#C4C4C4" : "#FFFFFF"}
            onClick={(event) => {
              event?.preventDefault();
              if (currentPage !== pageNumbers.length) {
                paginate(currentPage + 1);
              }
            }}
          ></PaginatedArrowRight>
        </PaginatedUl>
      </PaginatedContainer>
    );
  } else {
    return <></>;
  }
};
