import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  inventory?: SortOrder;
  name?: SortOrder;
  pointsCost?: SortOrder;
  updatedAt?: SortOrder;
};
