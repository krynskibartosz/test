import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";

export type AssetWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  pointsRewarded?: IntNullableFilter;
  price?: FloatNullableFilter;
  purchases?: PurchaseListRelationFilter;
  typeField?: "Option1";
};
