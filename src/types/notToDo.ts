export type NotToDoStatus = "to_avoid" | "avoided" | "broken";

export interface NotToDo {
  id: string;
  title: string;
  reason?: string;
  status: NotToDoStatus;
  createdAt: string;
  updatedAt?: string;
  streak?: number;
  tag?: string;
}
