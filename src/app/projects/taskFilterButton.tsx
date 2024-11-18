import CardWrapper from "~/components/CardWrapper";
import { cn } from "~/lib/utils";

export default function TaskFilterButton({
  title,
  isSelected,
  setTaskFilter,
}: {
  title: string;
  isSelected: boolean;
  setTaskFilter: (title: string) => void;
}) {
  const buttonStyles = cn({
    "hover:bg-optiiBlue hover:text-white cursor-pointer": !isSelected,
    "bg-optiiTeal text-white": isSelected,
  });

  return (
    <div className="TaskFilterButton" onClick={() => setTaskFilter(title)}>
      <CardWrapper addClasses={buttonStyles}>
        <p className="TaskFilterButtonTitle font-semibold">{title}</p>
        <p className="TaskFilterButtonCount text-xl font-semibold">0</p>
      </CardWrapper>
    </div>
  );
}
