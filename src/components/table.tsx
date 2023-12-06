"use client";

import { useEffect, useState } from "react";

export default function Table() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [temp, setTemp] = useState("");
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const response = await fetch("/habits/api");
      const d = await response.json();
      setHabits(d.habits);
    };

    fetchHabits();
  }, []);

  const password = "1234";

  function handleClick() {
    if (password === temp) {
      setLoggedIn(!loggedIn);
    } else {
    }
  }

  const CELL_STYLE = "border-r";
  return (
    <div className="flex flex-col items-center">
      {loggedIn === true ? (
        <table className="border">
          <thead className="border-b">
            <tr>
              <th className={CELL_STYLE}>Date</th>
              <th className={CELL_STYLE}>Workout</th>
              <th className={CELL_STYLE}>Typing</th>
              <th className={CELL_STYLE}>Coding</th>
              <th className={CELL_STYLE}>Reading</th>
            </tr>
          </thead>
          <tbody>
            {habits.map((habit: any, index) => (
              <tr className="border-b " key={index}>
                <td className={CELL_STYLE}>{habit.date}</td>
                <td className={CELL_STYLE}>
                  <input type="checkbox" checked={habit.workout} />
                </td>
                <td className={CELL_STYLE}>
                  <input type="checkbox" checked={habit.typingPractice} />
                </td>
                <td className={CELL_STYLE}>
                  <input type="checkbox" checked={habit.coding} />
                </td>
                <td className={CELL_STYLE}>
                  <input type="checkbox" checked={habit.reading} />
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
