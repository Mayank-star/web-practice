import React from "react";
import { Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Users = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const showingActiveUser = searchparams.get('filter')==='active'

  return (
    <div className=" flex flex-col gap-3 w-1/6">
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      <Outlet />
      <div>
        {" "}
        <button onClick={() => setSearchParams({ filter: "active" })} className="border-2 border-pink-500 mx-2 px-3 py-1">
          Active user
        </button>
        <button onClick={() => setSearchParams({})} className="border-2 border-pink-500 mx-2 px-3 py-1">Reset user</button>
      </div>
      {
        showingActiveUser ? <h1>Showing active users</h1> : <h1>Showing all users</h1>
      }
    </div>
  );
};

export default Users;
