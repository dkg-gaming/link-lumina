
import { useState, useEffect } from "react";
import { getStoredShortcuts, storeShortcuts } from "@/lib/storage";
import { AddShortcutButton } from "@/components/AddShortcutButton";
import { ShortcutCard } from "@/components/ShortcutCard";
import { AddShortcutDialog } from "@/components/AddShortcutDialog";
import { Shortcut } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

export default function Index() {
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setShortcuts(getStoredShortcuts());
  }, []);

  const handleAddShortcut = (
    newShortcut: Omit<Shortcut, "id" | "createdAt">
  ) => {
    const shortcut: Shortcut = {
      ...newShortcut,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
    };

    const updatedShortcuts = [...shortcuts, shortcut];
    setShortcuts(updatedShortcuts);
    storeShortcuts(updatedShortcuts);

    toast({
      title: "Shortcut hinzugefügt",
      description: `${shortcut.name} wurde zu deinen Shortcuts hinzugefügt.`,
    });
  };

  return (
    <div className="min-h-screen p-6 sm:p-8">
      <header className="max-w-6xl mx-auto mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 neon-text">
          Meine Shortcuts
        </h1>
        <p className="text-muted-foreground">
          Füge deine wichtigsten Websites als Shortcuts hinzu.
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="col-span-1">
            <AddShortcutButton onClick={() => setIsDialogOpen(true)} />
          </div>
          {shortcuts.map((shortcut) => (
            <div key={shortcut.id} className="col-span-1">
              <ShortcutCard shortcut={shortcut} />
            </div>
          ))}
        </div>
      </main>

      <AddShortcutDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onAdd={handleAddShortcut}
      />
    </div>
  );
}
