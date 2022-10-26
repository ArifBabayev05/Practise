import dayjs from "dayjs";
import React, { useContext } from "react";
import plus from '../assets/1.png'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import GlobalContext from "../context/GlobalContext";
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, setShowEventModal } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  return (
    <header className="px-4 py-2 flex items-center justify-between">

      <h1 className="mr-10 text-3xl text-black-500" style={{'fontWeight':'bold'}}>
        Cal <span style={{'color':'blue','width':'10px'}}>.</span>
      </h1>

      <div className='flex'>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format(
            "MMMM YYYY"
          )}
        </h2>

        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>

      </div>


      <div className='navEvents flex' style={{ 'float': 'right' }} >
        <button
          onClick={() => setShowEventModal(true)}
          className="border p-2 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center shadow-md hover:shadow-2xl"
        >
          <img src={plus} alt="create_event" style={{ 'width': '30px', 'height': '25px' }} />
          <span className="pl-3 pr-7 text-white"> Create</span>
        </button>
        <TooltipComponent  position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          >
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' className="rounded-full w-8 h-8" alt="avatar" />
            <p>
            </p>

          </div>
        </TooltipComponent>
      </div>
    </header>
  );
}
