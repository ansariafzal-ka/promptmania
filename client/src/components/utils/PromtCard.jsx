import React from "react";

const PromtCard = ({ name, title, prompt }) => {
  return (
    <div className="p-4 border bg-gray-100 shadow-md rounded-lg flex flex-col gap-y-2">
      <div className="flex flex-row justify-start items-center gap-2">
        <h1 className="w-7 h-7 bg-green-600 rounded-full text-center font-medium text-white">
          {name[0]}
        </h1>
        <h1 className="font-medium">{name}</h1>
      </div>
      <h1 className="text-gray-600 font-medium">{title}</h1>
      <p className="text-gray-600">{prompt}</p>
    </div>
  );
};

export default PromtCard;
