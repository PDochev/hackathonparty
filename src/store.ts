import { create } from "zustand";

interface UserState {
  name: string;
  id: string;
}

export const useUserStore = create<UserState>()(() => ({
  name: "Anom",
  id: "",
}));
