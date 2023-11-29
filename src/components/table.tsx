"use client";

import { useState } from "react";

export default function Table() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [temp, setTemp] = useState("");
  const [lists, setLists] = useState(["a", "sdf", "cvcv", "werfaf"]);

  const password = "1234";

  function handleClick() {
    if (password === temp) {
      console.log("good");
      setLoggedIn(!loggedIn);
    } else {
      console.log("bad ");
    }
  }

  return (
    <div className="flex flex-col items-center">
      {loggedIn === true ? (
        <table className="border">
          <thead className="border-b">
            <tr>
              <th className="border-r">Name</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((str, index) => (
              <tr className="border-b" key={index}>
                <td>{str}</td>
                <td
                  className="border-l hover:cursor-pointer hover:underline"
                  onClick={() =>
                    setLists(
                      lists.slice(0, index).concat(lists.slice(index + 1)),
                    )
                  }
                >
                  x
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex space-x-4">
          <input
            className="px-2 py-1 text-black"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <button
            className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700"
            onClick={() => handleClick()}
          >
            login
          </button>
        </div>
      )}
    </div>
  );
}
