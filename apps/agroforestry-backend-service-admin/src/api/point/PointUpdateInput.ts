import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointUpdateInput = {
  description?: string | null;
  origin?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
