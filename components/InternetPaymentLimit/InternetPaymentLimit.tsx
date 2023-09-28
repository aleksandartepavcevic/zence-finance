import React from "react";
import Typography from "../ui/typography";
import { Progress } from "../ui/progress";

const InternetPaymentLimit = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Typography variant="muted">Internet payment limit</Typography>
        <div className="flex items-center justify-between gap-1">
          <Typography variant="p" className="text-md">
            $ 1,200
          </Typography>
          <Typography variant="p" className="text-md">
            /
          </Typography>
          <Typography variant="muted" className="text-md">
            3,000
          </Typography>
        </div>
      </div>
      <Progress value={33} />
    </div>
  );
};

export default InternetPaymentLimit;
