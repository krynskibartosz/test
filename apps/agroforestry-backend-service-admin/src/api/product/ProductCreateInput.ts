import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  inventory?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  pointsCost?: number | null;
};
