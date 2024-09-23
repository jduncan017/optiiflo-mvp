import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function TaskList() {
  const initialTasks = [
    { id: 1, name: "Design new landing page", status: "In Progress" },
    { id: 2, name: "Update user dashboard", status: "Pending" },
    { id: 3, name: "Implement payment gateway", status: "Completed" },
    { id: 4, name: "Refactor authentication system", status: "In Progress" },
    { id: 5, name: "Optimize database queries", status: "Pending" },
    { id: 6, name: "Create mobile app wireframes", status: "Not Started" },
    { id: 7, name: "Write API documentation", status: "In Progress" },
    { id: 8, name: "Set up CI/CD pipeline", status: "Completed" },
    { id: 9, name: "Conduct user testing", status: "Not Started" },
    { id: 10, name: "Implement dark mode", status: "Pending" },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  function getStatusColor(status: string) {
    switch (status) {
      case "Completed":
        return "bg-green-200 text-green-800";
      case "In Progress":
        return "bg-blue-200 text-blue-800";
      case "Pending":
        return "bg-orange-200 text-orange-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  }

  const handleStatusChange = (id: number, newStatus: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <Card className="TaskListCard h-full overflow-hidden lg:col-span-2">
      <CardHeader>
        <CardTitle>Task Overview</CardTitle>
      </CardHeader>
      <CardContent className="TaskListContainer h-full overflow-auto">
        <ul className="Tasklist flex flex-1 flex-col gap-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`TaskListItem ${
                task.status === "Completed" && "bg-gray-300"
              } flex items-center justify-between rounded-lg border border-neutral-200 bg-gray-100 p-4 shadow`}
            >
              <p>{task.name}</p>
              <div className="flex w-32 items-center gap-2">
                <Select
                  value={task.status}
                  onValueChange={(value) => handleStatusChange(task.id, value)}
                >
                  <SelectTrigger className={getStatusColor(task.status)}>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
