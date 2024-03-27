import toast from "react-hot-toast";
import { API_ENDPOINT } from "@/constants";

export const saveTourDetails = (tourDetails: any, userId: string) => {
  let apiURL: string = `${API_ENDPOINT}/saveTour`;
  fetch(apiURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      city: tourDetails.city,
      country: tourDetails.country,
      description: tourDetails.description,
      stops: `${tourDetails.stops}`,
      title: tourDetails.title,
      id: userId,
    }),
  })
    .then(() => {
      toast.success("Tour added successfully.");
    })
    .catch(() => {
      toast.error("Failed to add tour.");
    });
};
