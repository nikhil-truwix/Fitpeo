const appointments = [
  {
    title: "Dentist",
    time: "09:00–11:00",
    doctor: "Dr. Cameron Williamson",
    icon: "🦷",
    bgColor: "bg-indigo-700",
    textColor: "text-white",
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00–12:00",
    doctor: "Dr. Kevin Djones",
    icon: "💪",
    bgColor: "bg-indigo-100",
    textColor: "text-gray-900",
  },
];

const upcomingSchedule = [
  {
    day: "On Thursday",
    events: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "💉",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
      },
    ],
  },
  {
    day: "On Saturday",
    events: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧑‍⚕️",
      },
    ],
  },
];

export default function ScheduleAndAppointments() {
  return (
    <div className="space-y-8">
      {/* Appointments */}
      <div className="flex flex-col md:flex-row gap-4">
        {appointments.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-full md:max-w-sm rounded-2xl p-4 ${item.bgColor}`}
          >
            <div className="flex flex-col">
              <h3 className={`text-sm font-semibold ${item.textColor}`}>
                {item.title}
              </h3>
              <p className={`text-xs ${item.textColor}`}>{item.time}</p>
              <p className={`text-xs mt-1 ${item.textColor}`}>{item.doctor}</p>
            </div>
            <div className="text-2xl">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Upcoming Schedule */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">The Upcoming Schedule</h2>
        {upcomingSchedule.map((schedule, idx) => (
          <div key={idx}>
            <h3 className="text-sm text-gray-500 mb-2">{schedule.day}</h3>
            <div className="flex flex-wrap gap-4">
              {schedule.events.map((event, i) => (
                <div
                  key={i}
                  className="bg-indigo-100 text-gray-800 rounded-2xl p-4 w-full sm:w-64 flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-sm font-semibold">{event.title}</h4>
                    <p className="text-xs">{event.time}</p>
                  </div>
                  <span className="text-xl">{event.icon}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
