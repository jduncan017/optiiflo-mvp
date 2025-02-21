import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ProgressComponent } from "~/components/ui/progress";

export default function ProgressMeter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress Meter</CardTitle>
      </CardHeader>
      <CardContent>
        <ProgressComponent value={75} className="w-full" />
        <div className="mt-2 text-center text-sm text-G3">75% Complete</div>
      </CardContent>
    </Card>
  );
}
