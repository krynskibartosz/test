import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  inventory?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  pointsCost?: number | null;
};
