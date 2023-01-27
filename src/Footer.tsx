import React from "react";
import { withUser } from "./withProvider";

function Footer({
  user,
  handleLogOut,
}: {
  handleLogOut: () => void;
  user: { full_name: string };
}) {
  return (
    <>
      <div className="w-full bg-gray-500">
        {user && (
          <div className="flex items-center justify-between w-full max-w-4xl gap-10 mx-auto bg-gray-500">
            <div>
              <span className="text-xl font-black">Hello,</span>
              <span className="text-2xl font-black text-orange-500 animate-pulse">
                {user.full_name}
              </span>
            </div>
            <button
              className="px-6 py-0 font-black bg-orange-400 rounded-md hover:text-white hover:bg-orange-700"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        )}
        {!user && (
          <div className="flex gap-8 p-2 pl-16 bg-gray-500 sm:place-content-between sm:px-16">
            <div className="text-xs text-white">
              Copyright ⓒ 2022 | CodeYogi
            </div>
            <div className="text-xs text-white">Powered By CodeYogi</div>
          </div>
        )}
      </div>
    </>
  );
}
export default withUser(Footer);
