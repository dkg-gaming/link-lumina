
import { Link2, Trash2 } from "lucide-react";
import { Shortcut } from "@/lib/types";

interface ShortcutCardProps {
  shortcut: Shortcut;
  onDelete: (id: string) => void;
}

export function ShortcutCard({ shortcut, onDelete }: ShortcutCardProps) {
  const handleClick = () => {
    window.open(shortcut.url, "_blank");
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(shortcut.id);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        className="glass neon-border card-hover w-full aspect-square p-6 flex flex-col items-center justify-center gap-4 group hover:neon-glow"
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
          <Link2 className="w-12 h-12 text-primary transition-transform group-hover:scale-110 animate-pulse-glow" />
        )}
        <div className="text-center">
          <h3 className="font-medium text-sm mb-1 truncate max-w-[180px] neon-text">
            {shortcut.name}
          </h3>
          <p className="text-xs text-muted-foreground truncate max-w-[180px]">
            {shortcut.url}
          </p>
        </div>
      </button>
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full hover:bg-destructive/20 hover:neon-glow"
      >
        <Trash2 className="w-4 h-4 text-destructive" />
      </button>
    </div>
  );
}
