import { PurchaseCreateNestedManyWithoutAssetsInput } from "./PurchaseCreateNestedManyWithoutAssetsInput";

export type AssetCreateInput = {
  description?: string | null;
  name?: string | null;
  pointsRewarded?: number | null;
  price?: number | null;
  purchases?: PurchaseCreateNestedManyWithoutAssetsInput;
  typeField?: "Option1" | null;
};
