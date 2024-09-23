import { Button } from "~/components/ui/button";
import { Mail, Send, Clock, Users, Trash2, Menu } from "lucide-react";

export default function EmailSidebar() {
  return (
    <div className="EmailClientSidebar flex flex-col items-center gap-2 space-y-4 bg-optiiTeal px-4 py-8">
      <Button variant="ghost" size="icon" className="text-white">
        <Mail className="h-8 w-8" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Send className="h-8 w-8" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Clock className="h-8 w-8" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Users className="h-8 w-8" />
      </Button>
      <Button variant="ghost" size="icon" className="text-white">
        <Trash2 className="h-8 w-8" />
      </Button>
      <Button variant="ghost" size="icon" className="mt-auto text-white">
        <Menu className="h-8 w-8" />
      </Button>
    </div>
  );
}
