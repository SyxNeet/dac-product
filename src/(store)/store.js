import { create } from 'zustand';

const useStore = create((set, get) => ({
  slug: [],
  setSlug: (data) => {
    set((state) => {
      return {
        ...state,
        slug: data,
      };
    });
  },
}));

export default useStore;
