import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { PointListRelationFilter } from "../point/PointListRelationFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  points?: PointListRelationFilter;
  purchases?: PurchaseListRelationFilter;
  username?: StringFilter;
};
