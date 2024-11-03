import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const List = ({ list, first, last }) => {
  return (
    <div
      className={`bg-white ${first ? "rounded-tl-xl rounded-tr-xl" : ""}  ${
        last ? "rounded-bl-xl rounded-br-xl" : ""
      } flex justify-between p-5 text-gray-900`}
    >
      <div className="flex gap-7 items-center">
        <div className="w-4">{list.icon}</div>
        <div className="text-gray-900 font-medium">{list.label}</div>
      </div>

      <ArrowRightIcon className="w-6" />
    </div>
  );
};

export default List;
