import { create } from "zustand";

const LOCAL_STORAGE_ITEMS = "changes";

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
    get().setItemsToLocalStorage();
  },
  clearItems: () => {
    localStorage.setItem(
      LOCAL_STORAGE_ITEMS,
      JSON.stringify({
        changedItems: [],
      })
    );
    set({ changedItems: [] });
  },
  findItem: (id) => get().changedItems.find((item) => item.id === id),
  deleteItem: (id) => {
    const { changedItems, setItemsToLocalStorage } = get();
    const currentItems = changedItems.filter((item) => item.id !== id);

    set({
      changedItems: currentItems,
    });

    setItemsToLocalStorage();
  },
  getItemsFromLocalStorage: () => {
    const items = localStorage.getItem(LOCAL_STORAGE_ITEMS);
    if (items) {
      const { changedItems } = JSON.parse(items);
      set({ changedItems });
    }
  },
  setItemsToLocalStorage: () => {
    const { changedItems } = get();
    localStorage.setItem(
      LOCAL_STORAGE_ITEMS,
      JSON.stringify({
        changedItems,
      })
    );
  },
}));
