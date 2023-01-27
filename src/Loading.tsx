import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loading() {
  return (
    <div className="flex items-center justify-center grow">
      <ClimbingBoxLoader color={"#e39a12"} />
    </div>
  );
}
export default Loading;
