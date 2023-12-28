import { create } from "zustand";

interface CoverState {
  bOpened: boolean;
  vOpen: () => void;
}

export const useCover = create<CoverState>()((set) => ({
  bOpened: false,
  vOpen: () => set(() => ({ bOpened: true })),
}));
