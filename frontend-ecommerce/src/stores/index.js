import { create } from "zustand";

export const useChangedItems = create((set, get) => ({
  changedItems: [],
  changeItem: (itemToAdd) => {
    const currentItems = get().changedItems;
    const itemIndex = currentItems.findIndex(
      (item) => item.id === itemToAdd.id
    );
    if (itemIndex !== -1) {
      currentItems[itemIndex] = {
        ...itemToAdd,
      };
      set({ changedItems: currentItems });
    } else {
      set({ changedItems: [...currentItems, itemToAdd] });
    }
  },
  clearItems: () => {
    set({ changedItems: [] });
  },
  findItem: (id) => get().changedItems.find((item) => item.id === id),
  deleteItem: (id) =>
    set({ changedItems: get().changedItems.filter((item) => item.id !== id) }),
}));
