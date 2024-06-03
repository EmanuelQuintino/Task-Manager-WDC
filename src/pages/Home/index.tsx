import { StatsCard } from "../../components/StatsCard";
import { useQueryUser } from "../../hooks/useQueryUser";
import { Container } from "./style";

export function Home() {
  const { data } = useQueryUser();
  console.log(data);

  return (
    <Container>
      <h2>Tarefas</h2>

      <div className="statsContainer">
        <StatsCard
          title="Completadas"
          icon="task_alt"
          variant="completed"
          number={data?.tasksInfo.completed.total}
        />

        <StatsCard
          title="Pendentes"
          icon="pending_actions"
          variant="pending"
          number={data?.tasksInfo.pending.open}
        />

        <StatsCard
          title="Atrasadas"
          icon="event_busy"
          variant="late"
          number={data?.tasksInfo.pending.late}
        />

        <StatsCard title="Total" icon="query_stats" number={data?.tasksInfo.total} />
      </div>
    </Container>
  );
}
