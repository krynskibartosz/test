import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  totalPointsUsed?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
