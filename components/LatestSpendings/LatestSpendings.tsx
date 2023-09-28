import React from "react";
import Typography from "../ui/typography";
import Item from "./components/Item";
import Spendings from "./components/Spendings";

const LatestSpendings = () => {
  return (
    <div>
      <div className="pb-4 flex justify-between items-center border-b">
        <Typography variant="large">Latest spendings</Typography>
        <Typography
          variant="muted"
          className="cursor-pointer hover:underline focus:underline"
        >
          View all
        </Typography>
      </div>
      <Spendings />
    </div>
  );
};

export default LatestSpendings;
