import Typography from "@/components/ui/typography";
import React from "react";

const TransactionsPage = () => {
  return (
    <>
      <div className="mb-8">
        <Typography variant="h3">Transactions</Typography>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-20 flex-[4]">
        <div>01</div>
        <div>02</div>
      </div>
    </>
  );
};

export default TransactionsPage;
