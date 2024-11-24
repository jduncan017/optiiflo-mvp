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
      <CardHeader className="HeaderContiner flex flex-row items-center justify-between pb-8">
        <CardTitle className="Title text-sm font-medium">{title}</CardTitle>
        <Icon className="Icon text-P2 dark:text-G2 mt-0 h-6 w-6" />
      </CardHeader>
      <CardContent className="ContentContainer flex h-full flex-col items-center justify-between">
        <div className="Number text-S4 text-4xl font-bold">{value}</div>
        <p className="Description dark:text-G2 text-G3 text-xs">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
