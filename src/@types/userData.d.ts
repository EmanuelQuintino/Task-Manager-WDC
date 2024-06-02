export type UserDataTypes = {
  id: string;
  name: string;
  email: string;
  tasksInfo: {
    total: number;
    completed: {
      total: number;
    };
    pending: {
      total: number;
      open: number;
      late: number;
    };
  };
};
