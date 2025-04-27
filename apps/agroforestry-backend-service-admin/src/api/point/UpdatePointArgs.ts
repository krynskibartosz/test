import { PointWhereUniqueInput } from "./PointWhereUniqueInput";
import { PointUpdateInput } from "./PointUpdateInput";

export type UpdatePointArgs = {
  where: PointWhereUniqueInput;
  data: PointUpdateInput;
};
