import { PointWhereInput } from "./PointWhereInput";
import { PointOrderByInput } from "./PointOrderByInput";

export type PointFindManyArgs = {
  where?: PointWhereInput;
  orderBy?: Array<PointOrderByInput>;
  skip?: number;
  take?: number;
};
