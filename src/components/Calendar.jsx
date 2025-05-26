const calendarData = [
  {
    day: "Mon",
    date: 25,
    times: ["10:00", "11:00", "12:00"],
  },
  {
    day: "Tues",
    date: 26,
    times: ["08:00", "09:00", "10:00"],
    selected: true,
    selectedTime: "09:00",
  },
  {
    day: "Wed",
    date: 27,
    times: ["12:00", "13:00"],
  },
  {
    day: "Thurs",
    date: 28,
    times: ["10:00", "11:00", "13:00"],
    selectedTime: "11:00",
  },
  {
    day: "Fri",
    date: 29,
    times: ["14:00", "16:00"],
  },
  {
    day: "Sat",
    date: 30,
    times: ["12:00", "14:00", "15:00"],
    selectedTime: "12:00",
  },
  {
    day: "Sun",
    date: 31,
    times: ["09:00", "10:00", "11:00"],
    selectedTime: "09:00",
  },
];

export default function AppointmentCalendar() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-700">October 2021</h2>
        <div className="flex gap-4 text-purple-500 text-xl">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="grid grid-cols-7 space-x-12 ">
        {calendarData.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-2 px-6 rounded-xl ${
              day.selected ? "bg-[#ecf3fe]" : ""
            }`}
          >
            <p className="text-sm text-gray-400">{day.day}</p>
            <p
              className={`text-lg font-semibold ${
                day.selected ? "text-indigo-600" : "text-gray-800"
              }`}
            >
              {day.date}
            </p>
            <div className="mt-3 flex flex-col gap-4">
              {day.times.map((time, i) => {
                const isSelectedTime = day.selectedTime === time;
                return (
                  <div
                    key={i}
                    className={`text-sm text-center px-2 py-1 rounded-full  ${
                      isSelectedTime
                        ? "bg-[#346dc9] text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
