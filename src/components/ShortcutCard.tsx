
import { Link2 } from "lucide-react";
import { Shortcut } from "@/lib/types";

interface ShortcutCardProps {
  shortcut: Shortcut;
}

export function ShortcutCard({ shortcut }: ShortcutCardProps) {
  const handleClick = () => {
    window.open(shortcut.url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="glass card-hover w-full aspect-square p-6 flex flex-col items-center justify-center gap-4 group"
    >
      {shortcut.icon ? (
        <img
          src={shortcut.icon}
          alt={shortcut.name}
          className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      ) : (
        <Link2 className="w-12 h-12 text-primary transition-transform group-hover:scale-110" />
      )}
      <div className="text-center">
        <h3 className="font-medium text-sm mb-1 truncate max-w-[180px]">
          {shortcut.name}
        </h3>
        <p className="text-xs text-muted-foreground truncate max-w-[180px]">
          {shortcut.url}
        </p>
      </div>
    </button>
  );
}
