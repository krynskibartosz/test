import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseWhereInput = {
  amount?: IntNullableFilter;
  asset?: AssetWhereUniqueInput;
  id?: StringFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
