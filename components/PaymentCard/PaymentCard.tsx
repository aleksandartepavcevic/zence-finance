import React from "react";
import Typography from "../ui/typography";
import { Switch } from "../ui/switch";
import Image from "next/image";
import mastercardImg from "@/public/Mastercard-logo.svg";

const PaymentCard = () => {
  return (
    <div className="flex flex-col gap-8 bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <Typography variant="muted">Availiable balance</Typography>
        <div className="flex items-center gap-4">
          <Typography variant="muted">Credit</Typography>
          <Switch />
        </div>
      </div>
      <Typography variant="h1" className="font-normal">
        $12,234
      </Typography>
      <div className="flex items-center justify-between">
        <Typography variant="p">**** **** **** 4532</Typography>
        <Image width={60} src={mastercardImg} alt="Mastercard logo" />
      </div>
    </div>
  );
};

export default PaymentCard;
