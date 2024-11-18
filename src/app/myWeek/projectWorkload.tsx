import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function ProjectWorkload() {
  const coworkers = [
    { name: "Alice", projects: 5 },
    { name: "Bob", projects: 3 },
    { name: "Charlie", projects: 7 },
    { name: "Diana", projects: 2 },
    { name: "Eve", projects: 4 },
    { name: "Frank", projects: 6 },
    { name: "Grace", projects: 1 },
    { name: "Hank", projects: 8 },
    { name: "Ivy", projects: 3 },
    { name: "Jack", projects: 5 },
  ];

  const maxProjects = Math.max(...coworkers.map((c) => c.projects));

  return (
    <Card className="h-full overflow-hidden">
      <CardHeader>
        <CardTitle>Project Workload</CardTitle>
      </CardHeader>
      <CardContent className="h-full overflow-auto">
        <div className="space-y-4">
          {coworkers.map((coworker) => (
            <div key={coworker.name} className="flex items-center">
              <span className="w-16 text-sm">{coworker.name}</span>
              <div className="ml-4 flex-grow">
                <div
                  className="h-4 rounded bg-optiiBlue dark:bg-gray-50"
                  style={{
                    width: `${(coworker.projects / maxProjects) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="ml-4 text-sm">{coworker.projects}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
