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

export const mockNotToDos: NotToDo[] = [
  {
    id: "1",
    title: "Stop scrolling TikTok after 9 PM",
    reason: "Destroys my sleep and focus.",
    status: "to_avoid",
    createdAt: "2025-07-01T20:00:00Z",
    tag: "digital",
  },
  {
    id: "2",
    title: "Don’t check email more than twice a day",
    reason: "Interrupts deep work.",
    status: "to_avoid",
    createdAt: "2025-07-02T08:00:00Z",
    tag: "work",
  },
  {
    id: "3",
    title: "Avoid drinking soda",
    reason: "Want to stay hydrated and healthier.",
    status: "avoided",
    createdAt: "2025-06-28T12:00:00Z",
    updatedAt: "2025-07-03T12:00:00Z",
    streak: 6,
    tag: "health",
  },
  {
    id: "4",
    title: "Don’t multitask during meetings",
    reason: "It’s disrespectful and makes me unfocused.",
    status: "broken",
    createdAt: "2025-06-29T10:00:00Z",
    updatedAt: "2025-07-02T10:30:00Z",
    tag: "focus",
  },
];
