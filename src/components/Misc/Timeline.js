import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";
export default function Timeline({ finishingDate }) {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    if (finishingDate) {
      const finishDate = new Date(finishingDate);
      const planningDate = new Date(finishDate);
      planningDate.setFullYear(planningDate.getFullYear() - 3);
      const constructionDate = new Date(finishDate);
      constructionDate.setFullYear(constructionDate.getFullYear() - 1);
      constructionDate.setMonth(constructionDate.getMonth() - 6);
      //   <b>{format(parseISO(project.finishingDate), "MM/yyyy")}</b>
      setMilestones([
        {
          date: planningDate.toISOString().slice(0, 10),
          title: "Planning phase",
          description: "The planning phase of the project begins.",
        },
        {
          date: constructionDate.toISOString().slice(0, 10),
          title: "Construction",
          description: "The construction of the project starts.",
        },
        {
          date: finishDate.toISOString().slice(0, 10),
          title: "Project completion",
          description: "The project is ready and you can move in.",
        },
      ]);
    }
  }, [finishingDate]);

  return (
    <div>
      <h1 className="text-4xl mb-10 font-heading">Timeline for the project</h1>
      {milestones.length ? (
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {milestones.map((milestone, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-text leading-none text-gray-400 dark:text-gray-500">
                <b>{format(parseISO(milestone.date), "MM/yyyy")}</b>
              </time>
              <h3 className="text-lg font-heading text-textDark ">
                {milestone.title}
              </h3>
              <p className="mb-4 text-base font-text text-gray-500 ">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
