import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PointWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  origin?: "Option1";
  user?: UserWhereUniqueInput;
  value?: IntNullableFilter;
};
