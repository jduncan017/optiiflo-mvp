import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface OverviewCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  description: string;
}

export default function OverviewCard({
  icon: Icon,
  title,
  value,
  description,
}: OverviewCardProps) {
  return (
    <Card className="OverviewCard flex h-full flex-col">
      <CardHeader className="HeaderContiner flex flex-row items-center justify-between pb-6">
        <CardTitle className="Title text-sm font-medium">{title}</CardTitle>
        <Icon className="Icon mt-0 h-6 w-6 text-gray-500 dark:text-gray-400" />
      </CardHeader>
      <CardContent className="ContentContainer flex h-full flex-col items-center justify-between">
        <div className="Number text-3xl font-bold">{value}</div>
        <p className="Description text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
