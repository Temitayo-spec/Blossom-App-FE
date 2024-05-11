import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IUserGlobalStore {
  user: Omit<IUser, 'password'> | null;
  updateUser: (user: Omit<IUser, 'password'> | null) => void;
}

export const useUserGlobalStore = create<IUserGlobalStore>()(
  persist(
    (set, get) => ({
      user: null,
      updateUser: (user) => set({ user }),
    }),
    {
      name: 'blossom-app-user-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
