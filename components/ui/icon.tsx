import React from "react";
import houseIcon from "@/public/house-icon.svg";
import shoppingBagIcon from "@/public/shopping-bag-icon.svg";
import ticketIcon from "@/public/ticket.icon.svg";
import piechartIcon from "@/public/pie-chart-icon.svg";
import linechartIcon from "@/public/line-chart-icon.svg";
import currencyIcon from "@/public/currency-icon.svg";
import walletIcon from "@/public/wallet-icon.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type IconName =
  | "house"
  | "shopping-bag"
  | "ticket"
  | "pie-chart"
  | "line-chart"
  | "currency"
  | "wallet";

type MapConfig = [IconName, StaticImport];

const Icon = ({ name }: { name: IconName }) => {
  const iconsMapConfig: MapConfig[] = [
    ["house", houseIcon],
    ["shopping-bag", shoppingBagIcon],
    ["ticket", ticketIcon],
    ["pie-chart", piechartIcon],
    ["line-chart", linechartIcon],
    ["currency", currencyIcon],
    ["wallet", walletIcon],
  ];
  const iconsMap = new Map(iconsMapConfig);

  const iconSrc = iconsMap.get(name) as StaticImport;

  return <Image src={iconSrc} alt={`${name} icon`} />;
};

export default Icon;
