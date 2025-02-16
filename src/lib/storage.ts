
import { Shortcut } from "./types";
import defaultShortcuts from "../data/shortcuts.json";

const STORAGE_KEY = "shortcuts";

export function getStoredShortcuts(): Shortcut[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultShortcuts;
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse shortcuts:", e);
    return defaultShortcuts;
  }
}

export function storeShortcuts(shortcuts: Shortcut[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shortcuts));
  // In einer echten Anwendung würden wir hier die JSON-Datei aktualisieren
  // Da wir im Browser sind, nutzen wir localStorage für die Persistenz
}

export const iconOptions = [
  { name: "Link", value: "" },
  { name: "GitHub", value: "https://github.com/favicon.ico" },
  { name: "Google", value: "https://www.google.com/favicon.ico" },
  { name: "Twitter", value: "https://twitter.com/favicon.ico" },
  { name: "Facebook", value: "https://facebook.com/favicon.ico" },
  { name: "YouTube", value: "https://youtube.com/favicon.ico" },
  { name: "Reddit", value: "https://reddit.com/favicon.ico" },
  { name: "LinkedIn", value: "https://linkedin.com/favicon.ico" },
  { name: "Instagram", value: "https://instagram.com/favicon.ico" },
  { name: "Amazon", value: "https://amazon.com/favicon.ico" },
];
