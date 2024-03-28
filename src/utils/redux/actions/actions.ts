import { SAVE_USER_DETAILS, UPDATE_TOURS } from "@/constants";
import { ITourDetailsWithUser } from "@/modals";

export const saveUserDetails = (userId: string) => {
  return {
    type: SAVE_USER_DETAILS,
    userId,
  };
};

export const updateTours = (tours: ITourDetailsWithUser[]) => {
  return {
    type: UPDATE_TOURS,
    tours,
  };
};
