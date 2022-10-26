import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";


export default function CreateEventButton() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <div className='mt-5'>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today Date
      </button>
      
    </div>
  );
}
