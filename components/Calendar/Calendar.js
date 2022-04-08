import React from "react";
import TableData from "./TableData";
import { tableData } from "./tableInfo";
const Calendar = () => {
  return (
    <>
      {tableData.map((data, i) => (
        <div className="mt-4" key={i}>
          <h3 className="title">{data.title}</h3>
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b">
                <tr>
                  <th className="table_head table_data">রমজান</th>
                  <th className="table_head table_data">ইংরেজী মাস</th>
                  <th className="table_head table_data">বার</th>
                  <th className="table_head table_data">সাহরী</th>
                  <th className="table_head table_data">ইফতার</th>
                </tr>
              </thead>
              <tbody>
                {data.time.map((time, i) => <TableData key={i} time={time}/>)}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default Calendar;
