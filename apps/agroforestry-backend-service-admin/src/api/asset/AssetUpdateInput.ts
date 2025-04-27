import { PurchaseUpdateManyWithoutAssetsInput } from "./PurchaseUpdateManyWithoutAssetsInput";

export type AssetUpdateInput = {
  description?: string | null;
  name?: string | null;
  pointsRewarded?: number | null;
  price?: number | null;
  purchases?: PurchaseUpdateManyWithoutAssetsInput;
  typeField?: "Option1" | null;
};
