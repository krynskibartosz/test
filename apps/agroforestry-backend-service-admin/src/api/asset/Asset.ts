import { Purchase } from "../purchase/Purchase";

export type Asset = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  pointsRewarded: number | null;
  price: number | null;
  purchases?: Array<Purchase>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
