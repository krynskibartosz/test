import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  amount?: SortOrder;
  assetId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
