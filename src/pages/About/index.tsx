import { Container } from "./style";

export function About() {
  return (
    <Container className="scrollBar">
      <article>
        <section>
          <h2>Sobre a Task Manager</h2>
          <p>
            A Task Manager é uma aplicação desenvolvida como projeto final para a
            conclusão do{" "}
            <a href="https://emanuelquintino.github.io/Page-WDC/" target="_blank">
              Curso de Desenvolvimento Web
            </a>{" "}
            ofertado pelo Reprograma Jucás. Ela foi criado com o intuito de proporcionar
            aos usuários uma ferramenta eficaz para gerenciar suas tarefas de forma
            organizada e intuitiva.
          </p>
        </section>

        <section>
          <h3>Principais Funcionalidades</h3>

          <ol>
            <li>
              <h4>Autenticação com JWT Token</h4>
              <p>
                A Task Manager oferece um sistema de autenticação seguro utilizando JSON
                Web Tokens (JWT), tecnologia comumente empregada por grandes empresas como
                Google, Microsoft, Facebook, Amazon e Netflix, garantindo assim a
                segurança das informações dos usuários.
              </p>
            </li>

            <li>
              <h4>Criação e Gerenciamento de Tarefas</h4>
              <p>
                Os usuários podem criar facilmente suas contas e definir suas credenciais
                de acesso para adicionar novas tarefas, atribuindo-lhes título, descrição,
                prazo e outras informações relevantes. Além disso, eles têm a opção de
                editar ou excluir tarefa conforme necessário.
              </p>
            </li>

            <li>
              <h4>Dashboard Detalhado</h4>
              <p>
                A Task Manager oferece um dashboard intuitivo que proporciona aos usuários
                uma visão do total de suas tarefas por status, permitindo-lhes acompanhar
                facilmente seu progresso e priorizar suas atividades. Ademais, podem fazer
                filtro, simplificando a localização e a organização de acordo com suas
                necessidades específicas.
              </p>
            </li>

            <li>
              <h4>Paginação</h4>
              <p>
                A funcionalidade de paginação oferece uma abordagem eficaz para lidar com
                grandes volumes de tarefas, garantindo que o usuário possa navegar
                facilmente por sua lista de afazeres sem sobrecarregar a interface e
                concentre sua atenção em um conjunto gerenciável de tarefas de cada vez,
                facilitando a priorização e a conclusão das mesmas.
              </p>
            </li>
          </ol>
        </section>
      </article>
    </Container>
  );
}
