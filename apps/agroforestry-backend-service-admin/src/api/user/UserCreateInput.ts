import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { PointCreateNestedManyWithoutUsersInput } from "./PointCreateNestedManyWithoutUsersInput";
import { PurchaseCreateNestedManyWithoutUsersInput } from "./PurchaseCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password: string;
  points?: PointCreateNestedManyWithoutUsersInput;
  purchases?: PurchaseCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
