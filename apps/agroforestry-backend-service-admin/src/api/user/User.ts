import { Order } from "../order/Order";
import { Point } from "../point/Point";
import { Purchase } from "../purchase/Purchase";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  points?: Array<Point>;
  purchases?: Array<Purchase>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
