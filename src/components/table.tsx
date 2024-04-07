"use client";

import { useEffect, useState } from "react";

// object that gives what type each habit is, since we r using checkboxes, we need booleans
interface Habit {
  date: string;
  workout: boolean;
  typingPractice: boolean;
  coding: boolean;
  reading: boolean;
}

// Union type in TypeScript allows you to define a type that can be one of several different types or values, a Habit key is a variable stored to the strings below
type HabitKey = "workout" | "typingPractice" | "coding" | "reading";

//this function is a useState function and we would just substitute a variable
export default function Table() {
  // login
  const [loggedIn, setLoggedIn] = useState(true);
  // login
  const [temp, setTemp] = useState("");

  //habits
  const [originalHabits, setOriginalHabits] = useState<Habit[]>([]);
  //habits; this is the variable i need to focus on, so in this use state, what we are doing is setting to the interface habit, and we have those values set to booleans, the video we watched was manually setting the variable straight to true but we don't need to because it already is a boolean.
  const [currentHabits, setCurrentHabits] = useState<Habit[]>([]);

  // THis use effect function uses the fetch API to make a GET request to the "/habits/api/getHabits" endpoint, this code is probably a key to geting the information from the database.
  useEffect(() => {
    const fetchHabits = async () => {
      // this first line of code is fetching the data from this specific route
      const response = await fetch("/habits/api/getHabits");
      //response json
      const data = await response.json();
      setOriginalHabits(data.habits);
      setCurrentHabits(data.habits);
    };

    fetchHabits();
  }, []);

  //this variable does not actually store anything but it actually is kinda like a n if statement, so if they aren't equal that means there is a change to the variable implmeneting the save button, however when we click it it show the new data, so if data has changed we need to export currentHabits
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
  const handleSave = async () => {
    try {
      const response = await fetch("/api/habits/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ habits: currentHabits }),
      });

      if (!response.ok) {
        throw new Error("Failed to save habits");
      }

      // Here, you could set a state variable to show a success message, etc.
      console.log("Habits saved successfully!");
    } catch (error) {
      console.error("Error saving habits:", error);
      // Here, you could set a state variable to show an error message, etc.
    }
  };

  //handlclick is the function that hold the variable password
  function handleClick() {
    const password = "1234"; // This should not be hardcoded

    //this if statement just uses a password, if password equals temp, it would set the log in as correct and then sends you the table.
    if (password === temp) {
      setLoggedIn(!loggedIn);
    } else {
      // Handle incorrect password case
    }
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
              </tr>
            </thead>
            <tbody>
              {currentHabits.map((habit, index) => (
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
