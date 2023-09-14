import React from "react";
import Typography from "../typography";
import { Switch } from "../switch";
import Image from "next/image";
import mastercardImg from "@/public/Mastercard-logo.svg";

const Card = () => {
  return (
    <div className="flex flex-col gap-8 bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex items-center justify-between">
        <Typography variant="p" className="text-zinc-400 font-light">
          Availiable balance
        </Typography>
        <div className="flex items-center gap-4">
          <Typography variant="p" className="text-zinc-400 font-light">
            Credit
          </Typography>
          <Switch />
        </div>
      </div>
      <Typography variant="h2">$12,234</Typography>
      <div className="flex items-center justify-between">
        <Typography variant="p">**** **** **** 4532</Typography>
        <Image width={60} src={mastercardImg} alt="Mastercard logo" />
      </div>
    </div>
  );
};

export default Card;
