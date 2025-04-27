import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PointCreateInput = {
  description?: string | null;
  origin?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  value?: number | null;
};
