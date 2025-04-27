import { Point as TPoint } from "../api/point/Point";

export const POINT_TITLE_FIELD = "id";

export const PointTitle = (record: TPoint): string => {
  return record.id?.toString() || String(record.id);
};
