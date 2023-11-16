import { create } from "zustand";

interface HamburgerState {
  bOpened: boolean;
  vToggle: () => void;
}

export const useHamburger = create<HamburgerState>()((set) => ({
  bOpened: false,
  vToggle: () => set((state) => ({ bOpened: !state.bOpened })),
}));
