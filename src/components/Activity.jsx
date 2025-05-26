const activityData = [
  { day: "Mon", bars: [40, 80, 60] },
  { day: "Tues", bars: [60, 100, 50] },
  { day: "Wed", bars: [30, 70, 90] },
  { day: "Thurs", bars: [50, 80, 60] },
  { day: "Fri", bars: [100, 90, 70] },
  { day: "Sat", bars: [60, 50, 80] },
  { day: "Sun", bars: [40, 70, 60] },
];

const barColors = ["bg-gray-300", "bg-cyan-400", "bg-indigo-500"];

export default function WeeklyActivityGraph() {
  return (
    <div className="bg-[#f6faff] p-4 rounded-xl shadow-sm w-full max-w-3xl mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Activity</h3>
        <p className="text-sm text-gray-400">3 appointments on this week</p>
      </div>

      <div className="flex justify-between items-end h-32">
        {activityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="flex items-end gap-1">
              {item.bars.map((height, i) => (
                <div
                  key={i}
                  className={`${barColors[i % barColors.length]} w-1.5 rounded-full`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
