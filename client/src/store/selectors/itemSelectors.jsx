import { createSelector } from "@reduxjs/toolkit";
import { selectActiveType } from "./typeSelectors";

export const selectItems = (state) => state.items;
export const selectVisibleItems = createSelector(
  [selectItems, selectActiveType],
  (items, activeType) => {
    if (!activeType) {
      return items;
    }
    return items.filter((item) => item.type === activeType);
  }
);
