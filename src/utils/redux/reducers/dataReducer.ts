import { initialState } from "../initialstate";

export const dataReducer = (details = initialState, action: any) => {
  switch (action.type) {
    case "SAVEUSERDETAILS":
      return { ...details, userId: action.userId };

    case "UPDATETOURS":
      return { ...details, userToursDetails: action.tours };

    default:
      return details;
  }
};
