"use client";

import { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(68);

  // const [saved, setSaved] = useState("");
  const [temp, setTemp] = useState("");
  const [lists, setLists] = useState(["a", "sdf", "cvcv", "werfaf"]);

  return (
    <div>
      <div className="flex flex-row">
        <input
          className="px-2 py-1 text-black"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setLists([temp, ...lists]);
            }
          }}
        />
        <button
          onClick={() => setLists([temp, ...lists])}
          className="rounded border bg-navy-600 px-2 py-1 text-white hover:bg-navy-700"
        >
          save
        </button>
      </div>
      <div className="my-4">_____</div>

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
                  setLists(lists.slice(0, index).concat(lists.slice(index + 1)))
                }
              >
                x
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
