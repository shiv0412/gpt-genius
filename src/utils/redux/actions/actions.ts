import { ITourDetailsWithUser } from "@/modals";

export const saveUserDetails = (userId: string) => {
  return {
    type: "SAVEUSERDETAILS",
    userId,
  };
};

export const updateTours = (tours: ITourDetailsWithUser[]) => {
  return {
    type: "UPDATETOURS",
    tours,
  };
};
