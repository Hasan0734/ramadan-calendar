import React from "react";

const Card = ({item}) => {
    const {title, arabic, expression, meaning } = item
  return (
    <div className="text-center mt-4">
      <h3 className="title">{title}</h3>
      <div className="bg-gray-300 rounded-md p-4 ">
        <p>
            {arabic}
        </p>
        <p className="text-sm">
          উচ্চারণ - {expression}
        </p>
        <p className="text-sm mt-1">
          অর্থ- {meaning}
          </p>
      </div>
    </div>
  );
};

export default Card;
