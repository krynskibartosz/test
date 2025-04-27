import { Asset } from "../asset/Asset";
import { User } from "../user/User";

export type Purchase = {
  amount: number | null;
  asset?: Asset | null;
  createdAt: Date;
  id: string;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
