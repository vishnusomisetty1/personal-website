"use client";

import { useEffect, useState } from "react";

interface Habit {
  id?: string;
  date: string;
  workout: boolean;
  typingPractice: boolean;
  coding: boolean;
  reading: boolean;
  toDelete?: boolean;
}

type HabitKey = "workout" | "typingPractice" | "coding" | "reading";

export default function Table() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [temp, setTemp] = useState("");

  const [originalHabits, setOriginalHabits] = useState<Habit[]>([]);
  const [currentHabits, setCurrentHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const fetchHabits = async () => {
      const response = await fetch("/habits/api/getHabits", {
        cache: "no-store",
      });
      const data = await response.json();
      setOriginalHabits(data.habits);
      setCurrentHabits(data.habits);
    };

    fetchHabits();
  }, []);

  console.log("original habits", originalHabits);

  const dataHasChanged =
    JSON.stringify(originalHabits) !== JSON.stringify(currentHabits);

  function handleAddRow() {
    const today = new Date().toISOString();
    const newHabits = [
      ...currentHabits,

      {
        date: today,
        workout: false,
        typingPractice: false,
        coding: false,
        reading: false,
      },
    ];
    setCurrentHabits(newHabits);
  }

  function handleCheckboxChange(habitIndex: number, habitKey: HabitKey) {
    const updatedHabits = currentHabits.map((habit, index) => {
      if (index === habitIndex) {
        const updatedHabit = { ...habit, [habitKey]: !habit[habitKey] };
        return updatedHabit;
      }
      return habit;
    });
    setCurrentHabits(updatedHabits);
  }

  // Inside your Table component
  async function handleSave() {
    const response = await fetch("/habits/api/saveHabits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ currentHabits }),
    });
  }

  function handleClick() {
    const password = "1234";

    if (password === temp) {
      setLoggedIn(!loggedIn);
    } else {
    }
  }

  function handleDeleteRow(habitIndex: number) {
    let b = currentHabits.map((obj: Habit, index: number) => {
      // console.log("habit printou", obj.id, index, habitIndex);

      if (index === habitIndex) {
        return {
          ...obj,
          toDelete: !obj.toDelete,
        };
      } else {
        return {
          ...obj,
        };
      }
    });

    console.log("after", b);

    setCurrentHabits(b);
  }

  const CELL_STYLE = "border-r";
  return (
    <div className="flex flex-col items-center">
      {loggedIn ? (
        <div>
          <table className="border">
            <thead className="border-b">
              <tr>
                <th className={CELL_STYLE}>Date</th>
                <th className={CELL_STYLE}>Workout</th>
                <th className={CELL_STYLE}>Typing</th>
                <th className={CELL_STYLE}>Coding</th>
                <th className={CELL_STYLE}>Reading</th>
                <th className={CELL_STYLE}></th>
              </tr>
            </thead>
            <tbody>
              {currentHabits.map((habit, index) => (
                <tr
                  className={`border-b ${
                    habit.toDelete === true && "bg-red-500"
                  }`}
                  key={index}
                >
                  <td className={CELL_STYLE}>{habit.date}</td>
                  <td className={CELL_STYLE}>
                    <input
                      type="checkbox"
                      checked={habit.workout}
                      onChange={() => handleCheckboxChange(index, "workout")}
                    />
                  </td>
                  <td className={CELL_STYLE}>
                    <input
                      type="checkbox"
                      checked={habit.typingPractice}
                      onChange={() =>
                        handleCheckboxChange(index, "typingPractice")
                      }
                    />
                  </td>
                  <td className={CELL_STYLE}>
                    <input
                      type="checkbox"
                      checked={habit.coding}
                      onChange={() => handleCheckboxChange(index, "coding")}
                    />
                  </td>
                  <td className={CELL_STYLE}>
                    <input
                      type="checkbox"
                      checked={habit.reading}
                      onChange={() => handleCheckboxChange(index, "reading")}
                    />
                  </td>
                  <td>
                    <button
                      className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700"
                      onClick={() => handleDeleteRow(index)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-2 flex flex-col space-y-2">
            <button
              className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700"
              onClick={handleAddRow}
            >
              Add New Day🔥
            </button>

            {dataHasChanged && (
              <button
                className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex space-x-4">
          <input
            className="px-2 py-1 text-black"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <button
            className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
