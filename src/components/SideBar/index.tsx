import { MenuItem } from "../MenuItem";
import { Container } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type SideBarProps = {
  handleToggleSideBar?: () => void;
};

export function SideBar({ handleToggleSideBar }: SideBarProps) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleLogoutApp() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      signOut();
      navigate("/");
    }
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key == "Enter") {
      handleLogoutApp();
    }
  }

  return (
    <Container onClick={handleToggleSideBar}>
      <div className="asideMenu" onClick={handleToggleSideBar}>
        <i className="material-icons closeIcon" onClick={handleToggleSideBar}>
          close
        </i>

        <nav>
          <ul>
            <NavLink to={"/"} onClick={handleToggleSideBar}>
              <MenuItem title="Home" icon="home" />
            </NavLink>

            <NavLink to={"/tasks?filter=all&page=1"} onClick={handleToggleSideBar}>
              <MenuItem title="Tarefas" icon="task" />
            </NavLink>

            <NavLink to={"/create-tasks"} onClick={handleToggleSideBar}>
              <MenuItem title="Adicionar" icon="add_circle" />
            </NavLink>

            <NavLink to={"/about"} onClick={handleToggleSideBar}>
              <MenuItem title="Sobre" icon="info" />
            </NavLink>

            <div onClick={handleLogoutApp} onKeyUp={handleKeyUp} tabIndex={0}>
              <MenuItem title="Sair" icon="exit_to_app" />
            </div>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
