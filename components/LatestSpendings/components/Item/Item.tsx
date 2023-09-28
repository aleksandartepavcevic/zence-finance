import Typography from "@/components/ui/typography";
import React from "react";
import { ItemProps } from "./Item.types";
import Icon from "@/components/ui/icon";

const Item = ({ data }: ItemProps) => {
  const { icon, category, date, ammount } = data;

  return (
    <div className="group flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="bg-white p-3 rounded-lg drop-shadow-md">
          <Icon name={icon} />
        </div>
        <div>
          <Typography variant="large" className="font-normal">
            {category}
          </Typography>
          <Typography variant="muted" className="text-xs">
            {date}
          </Typography>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Typography variant="h4" className="font-normal">
          - ${ammount.toFixed(2)}
        </Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 group-hover:ml-4 transition-[margin-left] stroke-[hsl(var(--muted-foreground))]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Item;
