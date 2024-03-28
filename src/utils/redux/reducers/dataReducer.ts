import { SAVE_USER_DETAILS, UPDATE_TOURS } from "@/constants";
import { initialState } from "../initialstate";

export const dataReducer = (details = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER_DETAILS:
      return { ...details, userId: action.userId };

    case UPDATE_TOURS:
      return { ...details, userToursDetails: action.tours };

    default:
      return details;
  }
};
