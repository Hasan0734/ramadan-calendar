import React from "react";

const TableData = ({time}) => {
  const {id, serial, englishMonth, day, saheri, iftar} = time
  return (
    <>
      <tr className="">
        <td className={` ${id === 8 ? 'table_active' : 'table_body'} table_data`}>{serial}</td>
        <td className={` ${id === 8 ? 'table_active' : 'table_body'} table_data`}>{englishMonth}</td>
        <td className={` ${id === 8 ? 'table_active' : 'table_body'} table_data`}>{day}</td>
        <td className={` ${id === 8 ? 'table_active' : 'table_body'} table_data`}>{saheri}</td>
        <td className={` ${id === 8 ? 'table_active' : 'table_body'} table_data`}>{iftar}</td>
      </tr>
    </>
  );
};

export default TableData;
