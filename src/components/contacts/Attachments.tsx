import CardWrapper from "~/components/CardWrapper";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Attachments() {
    return (
        <CardWrapper>
          <div className="CardHeader flex w-full items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide">Attachments</h2>
            <div className="ViewAll hover:text-S4 text-P2">
              <Link href={`/myWeek/${null}`}>
                <button className="flex cursor-pointer items-center gap-1 p-0">
                  <p className="text-sm">View All</p>
                  <SquareArrowOutUpRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            </div>
        </CardWrapper>
    );
}