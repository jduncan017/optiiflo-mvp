import type { FC } from "react";
import { Info } from "lucide-react";

interface InfoDialogueProps {
  text: string;
}

const InfoDialogue: FC<InfoDialogueProps> = ({ text }) => {
  return (
    <div className="group relative">
      <Info className="h-4 w-4 text-N2 hover:text-P2" />
      <div className="absolute bottom-6 left-1/2 z-10 hidden w-48 -translate-x-1/2 rounded-md bg-N2 p-2.5 text-sm font-medium leading-tight shadow-xl group-hover:block">
        {text}
      </div>
    </div>
  );
};

export default InfoDialogue;
