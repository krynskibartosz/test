import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPointsUsed?: number | null;
  user?: UserWhereUniqueInput | null;
};
