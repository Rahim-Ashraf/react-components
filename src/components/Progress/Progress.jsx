import { BiSolidBarChartSquare, BiSolidDashboard } from "react-icons/bi";
import { FaPause } from "react-icons/fa";
import "./progress.css"

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
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('-').map(Number);
  return new Date(2000 + year, month, day);
};

export default function Progress() {
  const minMonth = Math.min(...projects.map(project => parseInt(project.startDate.slice(3, 5))));
  const maxMonth = Math.max(...projects.map(project => parseInt(project.endDate.slice(3, 5))));

  const startMonth = new Date(2023, minMonth, 1);
  const endMonth = new Date(2023, maxMonth, 30);

  const totalDays = Math.ceil((endMonth - startMonth) / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  console.log(totalDays, totalWeeks)

  const progressOuterStyle = (startDate, endDate) => {
    const projectStart = parseDate(startDate);
    console.log(projectStart)
    const projectEnd = parseDate(endDate);
    const startOffset = Math.ceil((projectStart - startMonth) / (1000 * 60 * 60 * 24));
    const projectDuration = Math.ceil((projectEnd - projectStart) / (1000 * 60 * 60 * 24));

    return {
      position: "absolute",
      left: `${(startOffset / totalDays) * 100}%`,
      width: `${(projectDuration / totalDays) * 100}%`,
    };
  };


  return (
    <div className="max-w-[1920px] min-w-[1440px] mx-auto p-4 rounded-2xl border bg-white">
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
      <div className="border rounded-2xl">
        <div className="grid grid-cols-10">
          <div className="flex col-span-1">
            <div className="border-r px-4 pt-4 pb-6 space-y-6">
              <p className="mb-16">#</p>
              {projects.map((project, idx) => <p key={idx} className="">{idx + 1}</p>)}
            </div>
            <div className="px-4 pt-4 pb-6 space-y-6">
              <p className="mb-16">Name</p>
              {projects.map((project, idx) => <p key={idx} className="">{project.projectName}</p>)}
            </div>
          </div>
          <div className="col-span-9 h-full">
            <div className="grid grid-cols-11 pt-4 pb-4 w-full">
              {
                monthNames.map((month, idx) => {
                  if (idx + 1 >= minMonth && idx + 1 <= maxMonth) {
                    return <p key={idx} className="">{month}</p>
                  }
                })
              }
            </div>
            <div className="h-5/6 relative">
              <div className="flex justify-between h-full">
                {
                  Array(totalWeeks).fill().map((_, idx) => <p key={idx} className="border-l p-1 w-full">{idx + 1}</p>)
                }
              </div>
              <div className="absolute top-0 w-full h-full pt-14">
                <div className="h-full w-full">
                  {projects.map((project, idx) => (
                    <div key={idx} className="h-1/5">
                      <div className="w-full h-full relative">
                        <div style={progressOuterStyle(project.startDate, project.endDate)} className="flex gap-2 items-center" >
                          <progress className="progress w-full" value={project.progress} max="100"></progress>
                          <span>{project.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
