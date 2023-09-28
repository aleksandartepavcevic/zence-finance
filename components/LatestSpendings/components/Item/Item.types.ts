import type { IconName } from "@/components/ui/icon";

export type ItemProps = {
  data: SpendingItemData;
};

export type SpendingItemData = {
  icon: IconName;
  category: string;
  date: string;
  ammount: number;
};
