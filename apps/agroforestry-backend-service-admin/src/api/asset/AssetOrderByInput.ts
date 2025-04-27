import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pointsRewarded?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
