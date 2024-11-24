import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
export default function ProgressMeter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Meter</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={75} className="w-full" />
        <div className="text-G3 mt-2 text-center text-sm">75% Complete</div>
      </CardContent>
    </Card>
  );
}
