import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IProps {
  starting: boolean;
  setStarting: (v: boolean) => void;
  role: string;
  setRole: (v: string) => void;
}

export const useStarted = create<IProps>()(
  persist(
    (set) => ({
      starting: false,
      setStarting: (starting) => set({ starting }),
      role: '',
      setRole: (role) => set({ role }),
    }),
    {
      name: 'GetStarting',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.log('❌ Error saat rehydrate:', error);
        } else {
          console.log('✅ Hydration selesai:', state);
        }
      },
    }
  )
);
