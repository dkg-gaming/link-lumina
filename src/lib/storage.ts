
import { Shortcut } from "./types";

const STORAGE_KEY = "shortcuts";

export function getStoredShortcuts(): Shortcut[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse shortcuts:", e);
    return [];
  }
}

export function storeShortcuts(shortcuts: Shortcut[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shortcuts));
}
