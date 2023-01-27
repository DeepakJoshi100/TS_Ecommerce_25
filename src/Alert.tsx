import { useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { VscError } from "react-icons/vsc";
import { TiWarningOutline } from "react-icons/ti";
import { withAlert } from "./withProvider";
import { IconType } from "react-icons";

type themeMapProrp = {
  success: { color: string; color1: string; Icon: IconType };
  failure: { color: string; color1: string; Icon: IconType };
  warning: { color: string; color1: string; Icon: IconType };
};
const themeMap: themeMapProrp = {
  success: {
    color: "bg-green-300 border-green-600 text-white",
    color1: "border-green-700",
    Icon: FiCheckCircle,
  },
  failure: {
    color: "bg-red-300 border-red-600 text-white",
    color1: "border-red-700",
    Icon: VscError,
  },
  warning: {
    color: "bg-yellow-300 border-yellow-600 text-white",
    color1: "border-yellow-700",
    Icon: TiWarningOutline,
  },
};

type Alert = {
  alert: {
    message: string;
    type: string;
  };
  removeAlert: () => void;
};
const Alert = ({ alert, removeAlert }: Alert) => {
  useEffect(
    function () {
      if (alert) {
        const Timeout = setTimeout(removeAlert, 3 * 1000);
        return function () {
          clearTimeout(Timeout);
        };
      }
    },
    [alert]
  );

  if (!alert) {
    return <></>;
  }

  const { message, type } = alert;
  let color;
  let color1;
  let Icon: IconType;
  if (type === "success") {
    (color = "bg-green-300 border-green-600 text-white"),
      (color1 = "border-green-700"),
      (Icon = FiCheckCircle);
  } else if (type === "failure") {
    (color = "bg-red-300 border-red-600 text-white"),
      (color1 = "border-red-700"),
      (Icon = VscError);
  }
  return (
    <div className="">
      <div
        className={
          " flex items-center px-2 py-1 border rounded-md bg-gray-100 justify-between " +
          color1
        }
      >
        <div className="flex items-center">
          <div className={" px-1 text-xs py-1 rounded-md " + color}>
            <Icon />
          </div>
          <h1
            className={
              "border-white px-1 py-1 rounded-md text-xs font-black " + color
            }
          >
            <div className="flex items-center gap-1">
              <div className="text-black"> {type}</div> <div>{message}</div>
            </div>
          </h1>
        </div>
        <div>
          <button
            onClick={removeAlert}
            className="px-2 text-xs bg-blue-400 rounded-md "
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAlert(Alert);
