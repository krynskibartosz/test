import { User } from "../user/User";

export type Point = {
  createdAt: Date;
  description: string | null;
  id: string;
  origin?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
  value: number | null;
};
