import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseCreateInput = {
  amount?: number | null;
  asset?: AssetWhereUniqueInput | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
