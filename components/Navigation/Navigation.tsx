import React from "react";
import Typography from "../ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Menu from "./components/Menu";

const Navigation = () => {
  return (
    <div className="flex flex-col flex-1 bg-white rounded-2xl gap-20 p-6 items-center justify-between h-full shadow-lg">
      <Typography variant="h3">Zence Finance</Typography>
      <div className="flex flex-col items-center">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="Avatar image"
            className="object-cover object-top"
          />
          <AvatarFallback>TS</AvatarFallback>
        </Avatar>
        <div className="mt-2 text-center">
          <Typography variant="p" className="text-gray-500">
            Wellcome back,
          </Typography>
          <Typography variant="large">Taylor Simora</Typography>
        </div>
      </div>
      <div className="text-center">
        <Typography variant="h2" className="font-medium">
          $34,321
        </Typography>
        <Typography variant="p" className="text-gray-500">
          Monthly budget
        </Typography>
      </div>
      <Menu />
    </div>
  );
};

export default Navigation;
