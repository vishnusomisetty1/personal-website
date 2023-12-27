"use client";

import { useEffect, useState } from "react";

interface Habit {
  date: string;
  workout: boolean;
  typingPractice: boolean;
  coding: boolean;
  reading: boolean;
}

type HabitKey = "workout" | "typingPractice" | "coding" | "reading";

export default function Table() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [temp, setTemp] = useState("");
  const [habits, setHabits] = useState<Habit[]>([]);

  function createNewHabit(): Habit {
    const today = new Date().toISOString().slice(0, 10);
    return {
      date: today,
      workout: false,
      typingPractice: false,
      coding: false,
      reading: false,
    };
  }

  function handleAddRow() {
    setHabits([...habits, createNewHabit()]);
  }

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

  function handleCheckboxChange(habitIndex: number, habitKey: HabitKey) {
    const updatedHabits = habits.map((habit, index) => {
      if (index === habitIndex) {
        return { ...habit, [habitKey]: !habit[habitKey] };
      }
      return habit;
    });
    setHabits(updatedHabits);
  }

  const CELL_STYLE = "border-r";
  return (
    <div className="flex flex-col items-center">
      {loggedIn === true ? (
        <div>
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
              {habits.map((habit, index) => (
                <tr className="border-b" key={index}>
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
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-2 flex flex-col space-y-2">
            <button
              className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700"
              onClick={handleAddRow}
            >
              Add New Day
            </button>
            <button className="rounded border bg-indigo-600 px-2 py-1 hover:bg-indigo-700">
              Save
            </button>
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
