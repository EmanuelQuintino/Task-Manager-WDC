import { MenuItem } from "../MenuItem";
import { Container } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type SideBarProps = {
  toggleSideBar?: () => void;
};

export function SideBar({ toggleSideBar }: SideBarProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function logoutApp() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      signOut();
      navigate("/");
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Enter") {
      logoutApp();
    }
  }

  return (
    <Container>
      <div className="asideMenu">
        <i className="material-icons closeIcon" onClick={toggleSideBar}>
          close
        </i>

        <nav>
          <ul>
            <NavLink to={"/"}>
              <MenuItem title="Home" icon="home" />
            </NavLink>

            <NavLink to={"/tasks"}>
              <MenuItem title="Tarefas" icon="task" />
            </NavLink>

            <NavLink to={"/create-task"}>
              <MenuItem title="Adicionar" icon="add_circle" />
            </NavLink>

            <div onClick={logoutApp} onKeyDown={handleKeyDown} tabIndex={0}>
              <MenuItem title="Sair" icon="exit_to_app" />
            </div>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
