export type UserDataTypes = {
  id: string;
  name: string;
  email: string;
  tasksInfo: {
    total: number;
    pending: number;
    completed: number;
  };
};
