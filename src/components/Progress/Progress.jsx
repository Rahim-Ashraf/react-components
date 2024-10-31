import { BiSolidBarChartSquare, BiSolidDashboard } from "react-icons/bi";
import { FaPause } from "react-icons/fa";

const projects = [
  {
    projectName: "Project 1",
    startDate: "20-10-23",
    endDate: "10-12-23",
    progress: 73
  },
  {
    projectName: "Project 2",
    startDate: "13-05-23",
    endDate: "07-08-23",
    progress: 35
  },
  {
    projectName: "Project 3",
    startDate: "03-08-23",
    endDate: "27-09-23",
    progress: 82
  },
  {
    projectName: "Project 4",
    startDate: "11-04-23",
    endDate: "17-06-23",
    progress: 61
  },
  {
    projectName: "Project 5",
    startDate: "05-02-23",
    endDate: "15-04-23",
    progress: 95
  },

]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

export default function Progress() {
  const months = projects.map(project => parseInt(project.startDate.slice(3, 5)));
  const minMonth = Math.min(...months)
  const maxMonth = Math.max(...months)

  return (
    <div className="p-8 rounded-2xl border-2 bg-white">
      <div className="flex justify-between pb-8">
        <div>
          <h1 className="text-2xl font-bold">Objectives</h1>
        </div>
        <div className="flex gap-8 items-center">
          <button className="px-4 py-2 font-bold border-2 border-slate-400 rounded-lg">Objective impact summary</button>
          <button className="px-4 py-2 font-bold rounded-lg bg-blue-900 text-white">Add objective</button>
          <BiSolidDashboard className="text-2xl" />
          <FaPause className="text-2xl text-blue-900" />
          <BiSolidBarChartSquare className="text-2xl" />
        </div>
      </div>
      <div className="border rounded-2xl grid grid-cols-10">
        <div className="col-span-1 flex">
          <span className="border-r p-4">#</span>
          <h4 className="p-4">Name</h4>
        </div>
        <div className="col-span-9 flex justify-between p-4">
          {
            monthNames.map((month, idx) => {
              return <p key={idx}>{idx + 1 >= minMonth && idx + 1 <= maxMonth && month}</p>
            })
          }
        </div>

      </div>
    </div>
  )
}
