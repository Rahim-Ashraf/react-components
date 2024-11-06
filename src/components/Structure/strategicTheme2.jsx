
const strategicThemes = [
    {
        projectName: "Strategic Theme 1",
        businessGoal: [
            {
                title: "Business Goal 1",
                progress: 86,
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
                progress: 60,
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

            },
            {
                title: "Business Goal 2",
                progress: 25,
                score: "10 / 10",
                objectives: [
                    {
                        title: "Objective 1",
                        progress: 55,
                        score: "10 / 10",
                    },
                    {
                        title: "Objective 1",
                        progress: 55,
                        score: "10 / 10",
                    },
                ]
            },
            {
                title: "Business Goal 3",
                progress: 45,
                score: "10 / 10",

            },
            {
                title: "Business Goal 4",
                progress: 75,
                score: "10 / 10",
                objectives: [
                    {
                        title: "Objective 1",
                        progress: 55,
                        score: "10 / 10",
                    },
                ]
            },
        ]

    },

]

export default function StrategicTheme2() {

    const averageScore = (goals) => {
        let totalScore = 0;
        for (const element of goals) {
            totalScore += parseInt(element.score.slice(0, 2))
        }
        return totalScore / goals.length;
    }
    const averageProgress = (goals) => {
        let totalProgress = 0;
        for (const element of goals) {
            totalProgress += element.progress
        }
        return totalProgress / goals.length;
    }

    return (
        <div className="bg-white p-10 space-y-10">
            {strategicThemes.map((theme, idx) => (
                <div key={idx} className="flex">
                    <div className="h-max p-2 border border-slate-600 rounded-xl flex items-center gap-4">
                        <div>
                            <p className="p-2 rounded bg-green-50 text-green-600 font-semibold mb-2">{averageScore(theme.businessGoal)}/10</p>
                            <p className="p-2 rounded bg-slate-100 font-semibold text-center">{averageProgress(theme.businessGoal)}%</p>
                        </div>
                        <h2 className="text-2xl font-semibold px-4">{theme.projectName}</h2>
                    </div>

                    <div>
                        {theme.businessGoal?.map((businessGoalI, idx) => (
                            <div key={idx} className="flex relative">

                                {/* design for businessGoal */}
                                <div className="flex">
                                    {idx === 0 ? <div className="w-24">
                                        <div className="flex h-14 border-b border-black">
                                            <div className=""></div>
                                            <div className="border-b border-black -ml-[1px]"></div>
                                        </div>
                                        <div className="flex w-full h-full">
                                            <div className="border-r border-t w-full border-black rounded-tr-3xl"></div>
                                            <div className="w-full"></div>
                                        </div>
                                    </div> :
                                        idx === theme.businessGoal.length - 1 ? <div className="w-24">
                                            <div className="flex h-14">
                                                <div className="w-full"></div>
                                                <div className="w-full border-b border-l border-black rounded-bl-3xl -ml-[1px]"></div>
                                            </div>
                                            <div className="flex w-full h-full">
                                                <div className="w-full"></div>
                                                <div className="w-full"></div>
                                            </div>
                                        </div>
                                            :
                                            <div className="w-24">
                                                <div className="flex h-14">
                                                    <div className="w-full border-r border-black"></div>
                                                    <div className="w-full border-b border-l border-black rounded-bl-full -ml-[1px]"></div>
                                                </div>
                                                <div className="flex w-full h-full -mt-6">
                                                    <div className="w-full"></div>
                                                    <div className="w-full border-l border-black -ml-[1px]"></div>
                                                </div>
                                            </div>
                                    }
                                    <div className="pb-12 w-80">
                                        <div className="h-max p-2 border border-slate-600 rounded-xl flex items-center gap-4">
                                            <div>
                                                <p className={idx % 2 == 0 ? "p-2 rounded bg-yellow-50 text-yellow-400 font-semibold mb-2" :
                                                    "p-2 rounded bg-green-50 text-green-600 font-semibold mb-2"}>{businessGoalI.score}</p>
                                                <p className="p-2 rounded bg-slate-100 font-semibold text-center">{businessGoalI.progress}%</p>
                                            </div>
                                            <h2 className="text-2xl font-semibold px-4">{businessGoalI.title}</h2>
                                        </div>
                                    </div>
                                </div>

                                {/* design for objectives in businessGoal (if have any) */}
                                <div>
                                    {businessGoalI.objectives?.map((objective, idx) => (
                                        <div key={idx} className="flex">
                                            {businessGoalI.objectives.length === 1 ? <div className="grid grid-cols-2 w-24 -mt-12">
                                                <div className="border-b border-black"></div>
                                                <div className="border-b border-black"></div>
                                                <div className=""></div>
                                                <div className=""></div>
                                            </div> :
                                                idx === 0 ? <div className="grid grid-cols-2 w-24 -mt-12">
                                                    <div className="border-b border-black"></div>
                                                    <div className="border-b border-black"></div>
                                                    <div className="border-r border-t border-black rounded-tr-3xl"></div>
                                                    <div className="border-l border-t border-black rounded-tl-3xl -ml-[1px]"></div>
                                                </div> :
                                                    idx === businessGoalI.objectives.length - 1 ? <div className="grid grid-cols-2 w-24 -mt-12">
                                                        <div className=""></div>
                                                        <div className="border-b border-l border-black rounded-bl-3xl -ml-[1px]"></div>
                                                        <div className=""></div>
                                                        <div className=""></div>
                                                    </div> :
                                                        <div className="grid grid-cols-2 w-24 -mt-12">
                                                            <div className="border-r border-black"></div>
                                                            <div className="border-b border-l border-black rounded-bl-full -ml-[1px]"></div>
                                                            <div className="border-r border-black"></div>
                                                            <div className=""></div>
                                                        </div>}
                                            <div className="pb-12">
                                                <div className="h-max p-2 border border-slate-600 rounded-xl flex items-center gap-4">
                                                    <div>
                                                        <p className={idx % 2 == 0 ? "p-2 rounded bg-rose-50 text-rose-600 font-semibold mb-2" :
                                                            "p-2 rounded bg-yellow-50 text-yellow-400 font-semibold mb-2"}>{objective.score}</p>
                                                        <p className="p-2 rounded bg-slate-100 font-semibold text-center">{objective.progress}%</p>
                                                    </div>
                                                    <h2 className="text-2xl font-semibold px-4">{objective.title}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* end design for objectives in businessGoal (if have any) */}

                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}