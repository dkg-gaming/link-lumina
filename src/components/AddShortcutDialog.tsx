
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Link2, Plus } from "lucide-react";
import { Shortcut } from "@/lib/types";

interface AddShortcutDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (shortcut: Omit<Shortcut, "id" | "createdAt">) => void;
}

export function AddShortcutDialog({ open, onClose, onAdd }: AddShortcutDialogProps) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [icon, setIcon] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) return;

    onAdd({
      name,
      url: url.startsWith("http") ? url : `https://${url}`,
      icon,
    });

    setName("");
    setUrl("");
    setIcon("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass sm:max-w-[425px] border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center neon-text">
            <Plus className="w-5 h-5" />
            Shortcut hinzufügen
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-primary">Name</Label>
            <Input
              id="name"
              placeholder="z.B. Meine Website"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass focus:neon-glow focus:border-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url" className="text-primary">URL</Label>
            <Input
              id="url"
              placeholder="z.B. website.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="glass focus:neon-glow focus:border-primary"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="icon" className="text-primary">Icon URL (optional)</Label>
            <Input
              id="icon"
              placeholder="https://example.com/icon.png"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="glass focus:neon-glow focus:border-primary"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button 
              variant="outline" 
              type="button" 
              onClick={onClose} 
              className="glass hover:neon-glow neon-border"
            >
              Abbrechen
            </Button>
            <Button 
              type="submit"
              className="neon-border hover:neon-glow bg-primary/10"
            >
              Hinzufügen
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
