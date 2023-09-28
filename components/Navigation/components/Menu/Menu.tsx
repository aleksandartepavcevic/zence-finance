"use client";

import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Menu = () => {
  const pathname = usePathname();
  const classes = `flex items-center gap-4 fill-gray-300 text-gray-300 hover:text-black transition-colors`;
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-8">
        <Link
          href="/"
          className={cn(classes, pathname === "/" && `text-black`)}
        >
          <Icon name="pie-chart" />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/investments"
          className={cn(classes, pathname === "/investments" && `text-black`)}
        >
          <Icon name="line-chart" />
          <span>Investments</span>
        </Link>
        <Link
          href="/transactions"
          className={cn(classes, pathname === "/transactions" && `text-black`)}
        >
          <Icon name="currency" />
          <span>Transactions</span>
        </Link>
        <Link
          href="/wallet"
          className={cn(
            classes,
            pathname === "/wallet" && `text-black fill-black`
          )}
        >
          <Icon name="wallet" />
          <span>Wallet</span>
        </Link>
      </div>
      <div>
        <Link
          href="/sign-in"
          className="flex items-center gap-4"
          onClick={(e) => e.preventDefault()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>

          <span>Sign-out</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
