import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  inventory?: IntNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  pointsCost?: IntNullableFilter;
};
