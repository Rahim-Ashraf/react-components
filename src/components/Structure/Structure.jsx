import "./structure.css";

const strategicThemes = [
    {
        projectName: "Strategic Theme 1",
        businessGoal: [
            {
                title: "Business Goal 1",
                progress: 82,
                score: "10 / 10",
                objectives: [
                    {
                        title: "Objective 1",
                        progress: 55,
                        score: "10 / 10",
                    },
                    {
                        title: "Objective 2",
                        progress: 70,
                        score: "10 / 10",
                    },
                ]

            },
            {
                title: "Business Goal 2",
                progress: 25,
                score: "10 / 10"
            },
            {
                title: "Business Goal 3",
                progress: 45,
                score: "10 / 10"
            },
            {
                title: "Business Goal 4",
                progress: 75,
                score: "10 / 10"
            },
        ]

    },
    {
        projectName: "Strategic Theme 2",
        businessGoal: [
            {
                title: "Business Goal 1",
                progress: 82,
                score: "10 / 10",
                objectives: [
                    {
                        title: "Objective 1",
                        progress: 55,
                        score: "10 / 10",
                    },
                    {
                        title: "Objective 2",
                        progress: 70,
                        score: "10 / 10",
                    },
                ]

            },
            {
                title: "Business Goal 2",
                progress: 25,
                score: "10 / 10"
            },
            {
                title: "Business Goal 3",
                progress: 45,
                score: "10 / 10"
            },
            {
                title: "Business Goal 4",
                progress: 75,
                score: "10 / 10"
            },
        ]

    },

]

export default function Structure() {
    return (
        <div className="bg-white p-10">
            {
                strategicThemes.map((theme, idx) => (
                    <div key={idx} className="flex">
                        <div className="h-max p-2 border border-slate-600 rounded-xl flex items-center gap-4">
                            <div>
                                <p className="p-2 rounded bg-green-50 text-green-600 font-semibold mb-2">10/10</p>
                                <p className="p-2 rounded bg-slate-100 font-semibold text-center">82%</p>
                            </div>
                            <h2 className="text-2xl font-semibold">{theme.projectName}</h2>
                        </div>

                        <div>
                            {
                                theme.businessGoal?.map((businessGoalI, idx) => (
                                    <div key={idx} className="flex">
                                        <div className="grid grid-cols-2 w-24">
                                            <div className="border-r border-black"></div>
                                            <div className="border-b border-l border-black rounded-bl-full -ml-[1px]"></div>
                                            <div className="border-r border-black"></div>
                                            <div className=""></div>
                                        </div>
                                        <div className="h-max p-2 border border-slate-600 rounded-xl flex items-center gap-4">
                                            <div>
                                                <p className="p-2 rounded bg-green-50 text-green-600 font-semibold mb-2">{businessGoalI.score}</p>
                                                <p className="p-2 rounded bg-slate-100 font-semibold text-center">{businessGoalI.progress}%</p>
                                            </div>
                                            <h2 className="text-2xl font-semibold">{businessGoalI.title}</h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
