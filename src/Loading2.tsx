import React from "react";
import HashLoader from "react-spinners/HashLoader";

function Loading2() {
  return (
    <div className="h-screen flex items-center justify-center grow">
      <HashLoader className="text-blue-600" />
    </div>
  );
}
export default Loading2;
