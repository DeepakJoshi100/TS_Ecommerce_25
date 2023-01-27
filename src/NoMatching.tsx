import React from "react";

function NoMatching() {
  return (
    <>
      <div className="flex flex-col m-2">
        <div className="flex justify-center text-lg font-black text-red-700">
          Search Result Not Found !!!!
        </div>
        <span className="flex justify-center text-sm font-bold ">
          Try Searching Something Else
        </span>
      </div>
    </>
  );
}
export default NoMatching;
