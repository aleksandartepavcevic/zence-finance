import React from "react";
import Item from "../Item";
import { SpendingItemData } from "../Item/Item.types";
import dayjs from "dayjs";

const mockData: SpendingItemData[] = [
  {
    icon: "shopping-bag",
    category: "Online store",
    date: dayjs().subtract(3, "days").format("MMM DD, YYYY [at] H:mm A"),
    ammount: 32.5,
  },
  {
    icon: "house",
    category: "Housekeeping",
    date: dayjs().subtract(1, "month").format("MMM DD, YYYY [at] H:mm A"),
    ammount: 4.2,
  },
  {
    icon: "ticket",
    category: "Tickets",
    date: dayjs().subtract(7, "weeks").format("MMM DD, YYYY [at] H:mm A"),
    ammount: 100.29,
  },
];

const Spendings = () => {
  return (
    <div className="flex flex-col gap-4 pt-4">
      {mockData.map((el, i) => (
        <Item key={i} data={el} />
      ))}
    </div>
  );
};

export default Spendings;
