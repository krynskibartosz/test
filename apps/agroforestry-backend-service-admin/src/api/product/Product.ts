import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  inventory: number | null;
  name: string | null;
  orders?: Array<Order>;
  pointsCost: number | null;
  updatedAt: Date;
};
