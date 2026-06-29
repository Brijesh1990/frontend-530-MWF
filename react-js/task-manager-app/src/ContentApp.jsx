import { Link } from "react-router-dom";
import { FaFileLines, FaArrowRight } from "react-icons/fa6";

export default function ContentApp() {

  const tasks = [
    {
      id: 10,
      title: "Meeting with UI/UX Team",
      date: "26 June 2026",
      time: "6:00 PM - 8:00 PM",
    },
    {
      id: 11,
      title: "Landing Page Design",
      date: "27 June 2026",
      time: "10:00 AM - 12:00 PM",
    },
    {
      id: 12,
      title: "Client Discussion",
      date: "28 June 2026",
      time: "3:00 PM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      {/* Create Button */}

      <Link to="/add-task">
        <button
          className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95"
        >
          + Create New Task
        </button>
      </Link>

      {/* Heading */}

      <h1 className="mt-6 flex items-center gap-3 text-2xl font-bold text-gray-800">
        <FaFileLines className="text-green-700" />
        Manage Task
      </h1>

      {/* Statistics */}

      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-md font-medium">Landing Page</h3>
          <p className="mt-2 text-gray-500">25 Tasks</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-md font-medium">Dashboard CMS</h3>
          <p className="mt-2 text-gray-500">65 Tasks</p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <h3 className="text-sm font-medium">Mobile App</h3>
          <p className="mt-2 text-gray-500">12 Tasks</p>
        </div>

      </div>

      {/* Task List */}

      <div className="mt-8 space-y-5">

        {tasks.map((task) => (

          <Link
            key={task.id}
            to="/task-description"
            className="group block"
          >

            <div
              className="rounded-2xl bg-gradient-to-r from-green-700 to-green-900 p-5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
            >

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                {/* Number */}

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-black shadow-md transition duration-300 group-hover:rotate-12">
                  {task.id}
                </div>

                {/* Content */}

                <div className="flex-1">

                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition">
                    {task.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-200">
                    📅 {task.date}
                  </p>

                  <p className="text-sm text-gray-300">
                    🕒 {task.time}
                  </p>

                </div>

                {/* Arrow */}

                <FaArrowRight
                  className="text-2xl text-yellow-400 transition duration-300 group-hover:translate-x-3"
                />

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}