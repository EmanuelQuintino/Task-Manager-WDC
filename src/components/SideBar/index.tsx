import { MenuItem } from "../MenuItem";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type SideBarProps = {
  toggleSideBar?: () => void;
};

export function SideBar({ toggleSideBar }: SideBarProps) {
  const { signOut } = useAuth();

  function logoutApp() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      signOut();
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

            <MenuItem title="Sair" icon="exit_to_app" onClick={logoutApp} />
          </ul>
        </nav>
      </div>
    </Container>
  );
}
