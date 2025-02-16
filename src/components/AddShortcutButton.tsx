
import { Plus } from "lucide-react";
import { Button } from "./ui/button";

interface AddShortcutButtonProps {
  onClick: () => void;
}

export function AddShortcutButton({ onClick }: AddShortcutButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="glass card-hover w-full h-full min-h-[200px] flex flex-col gap-4 items-center justify-center text-primary group"
    >
      <Plus className="w-8 h-8 transition-transform group-hover:scale-110" />
      <span className="text-sm font-medium">Neuen Shortcut hinzufügen</span>
    </Button>
  );
}
