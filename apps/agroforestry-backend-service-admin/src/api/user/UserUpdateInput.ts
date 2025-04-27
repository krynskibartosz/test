import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { PointUpdateManyWithoutUsersInput } from "./PointUpdateManyWithoutUsersInput";
import { PurchaseUpdateManyWithoutUsersInput } from "./PurchaseUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string;
  points?: PointUpdateManyWithoutUsersInput;
  purchases?: PurchaseUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
