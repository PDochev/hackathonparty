import { create } from "zustand";

interface UserState {
  name: string;
  id: string;
}

type Action = {
  updateName: (name: UserState["name"]) => void;
};

export const useUserStore = create<UserState & Action>()((set) => ({
  name: "Anom",
  id: "",
  updateName: (name) => set(() => ({ name })),
}));
