"use client";

import { useState } from "react";

export function Table() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [lists, setLists] = useState(["a", "sdf", "cvcv", "werfaf"]);
  return (
    <div className="flex flex-col items-center">
      <p>logged in: {loggedIn.toString()}</p>
      <button onClick={() => setLoggedIn(!loggedIn)}>login</button>

      {loggedIn ? (
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
        <input className="px-2 py-1 text-black" />
      )}
    </div>
  );
}
