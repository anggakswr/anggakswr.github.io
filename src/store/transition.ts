import { create } from "zustand";

interface TransitionState {
  sToggle: "TOP" | "BOTTOM";
  vToggle: () => void;
}

export const useTransition = create<TransitionState>()((set) => ({
  sToggle: "TOP",
  vToggle: () =>
    set((state) => ({ sToggle: state.sToggle === "TOP" ? "BOTTOM" : "TOP" })),
}));
