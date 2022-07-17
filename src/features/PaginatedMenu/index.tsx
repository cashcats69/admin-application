import PUsers from "../../shared/icons/PaginatedUsers.svg";
import PView from "../../shared/icons/PaginatedView.svg";
import PMe from "../../shared/icons/PaginatedMe.svg";
import PUsersF from "../../shared/icons/PaginatedUsersF.svg";
import PViewF from "../../shared/icons/PaginatedViewF.svg";
import PMeF from "../../shared/icons/PaginatedMeF.svg";
import { NavLink } from "react-router-dom";
import { IPaginatedMenu } from "../../shared/config";
import { PaginatedUl, CurrentLi, CurrentImg, CurrentText, PaginatedLi, PaginatedImg, PaginatedText } from "./styles";


export const PaginatedMenu: React.FC<IPaginatedMenu> = ({ currentPage }) => {
  const names = ["Участники", "Отзывы", "Обо мне"];
  const icons = [PUsers, PView, PMe];
  const iconsF = [PUsersF, PViewF, PMeF];
  const links = ["/admin/members", "/admin/review", "/admin/about"];
  return (
    <PaginatedUl>
      {names.map((name, index) => {
        if (currentPage === index) {
          return (
            <CurrentLi key={index}>
              <CurrentImg src={iconsF[index]} />
              <NavLink
                style={{ textDecoration: "none", outline: "none" }}
                to={links[index]}
              >
                <CurrentText>{name}</CurrentText>
              </NavLink>
            </CurrentLi>
          );
        } else {
          return (
            <PaginatedLi key={index}>
              <PaginatedImg src={icons[index]} />
              <NavLink
                style={{ textDecoration: "none", outline: "none" }}
                to={links[index]}
              >
                <PaginatedText>{name}</PaginatedText>
              </NavLink>
            </PaginatedLi>
          );
        }
      })}
    </PaginatedUl>
  );
};
