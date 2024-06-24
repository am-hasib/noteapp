/// <reference types="vite/client" />
interface NoteItem {
  id: number;
  title: string;
  description: string;
}
interface Notes {
  notes: NoteItem[];
}
