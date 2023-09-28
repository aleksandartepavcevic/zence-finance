import React from "react";
import { Card } from "../ui/card";
import Typography from "../ui/typography";

const Report = ({ label }: { label: string }) => {
  return (
    <Card className="flex flex-1 items-center justify-between p-4">
      <div>Graph</div>
      <div>
        <Typography variant="muted">{label}</Typography>
        <Typography variant="large" className="font-medium">
          $5,000
        </Typography>
      </div>
    </Card>
  );
};

export default Report;
