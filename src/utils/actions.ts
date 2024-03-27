"use server";
import OpenAI from "openai";
import { IMessage } from "@/modals";
import { OPEN_AI_KEY } from "@/constants";

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
});

export const generateChatResponse = async (
  chatMessages: IMessage[] | any,
  assistantTemperature: number
) => {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a helpful assistant" },
        ...chatMessages,
      ],
      model: "gpt-3.5-turbo",
      temperature: assistantTemperature,
    });
    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};

export const generateTourResponse = async (city: string, country: string) => {
  const query = `Find a exact ${city} in this exact ${country}.
  If ${city} and ${country} exist, create a list of things families can do in this ${city},${country}.
  Once you have a list, create a one-day tour. Response should be  in the following JSON format:
  {
    "tour": {
      "city": "${city}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops": [" stop name", "stop name","stop name"]
    }
  }
  "stops" property should include only three stops.
  If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a tour guide" },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const tourData = JSON.parse(
      response.choices[0].message.content
        ? response.choices[0].message.content
        : ""
    );

    if (!tourData.tour) {
      return null;
    }
    return { tour: tourData.tour };
  } catch (error) {
    return null;
  }
};

export const generateTrendingTours = async (country: string) => {
  const query = `Find five cities this exact ${country}.
  If ${country} exist, create a list of things families can do in this ${country}.
  Once you have a list, create a one-day tour. Response should be  in the following JSON format:
  {
    "tour": [{
      "city":Any city in "${country}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops": [" stop name", "stop name","stop name"]
    },
    {
      "city":Any city in "${country}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops":[" stop name", "stop name","stop name"]
    },
    {
      "city":Any city in "${country}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops":[" stop name", "stop name","stop name"]
    },{
      "city":Any city in "${country}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops":[" stop name", "stop name","stop name"]
    },{
      "city":Any city in "${country}",
      "country": "${country}",
      "title": "title of the tour",
      "description": "short description of the city and tour",
      "stops": [" stop name", "stop name","stop name"]
    }
  ]
  }
  "stops" property should include only three stops. All five "city" of the "${country}" are different.
  If you can't find info on exact ${country}, or city does not exist, or it's population is less than 1, or it is not located in the following ${country},   return { "tour": null }, with no additional characters.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "you are a tour guide" },
        {
          role: "user",
          content: query,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });
    const tourData = JSON.parse(
      response.choices[0].message.content
        ? response.choices[0].message.content
        : ""
    );

    if (!tourData.tour) {
      return null;
    }
    return { tour: tourData.tour };
  } catch (error) {
    return null;
  }
};

export const generateTourImage = async (city: string, country: string) => {
  try {
    const tourImage = await openai.images.generate({
      prompt: `a panoramic view of the ${city} ${country}`,
      n: 1,
      size: "512x512",
    });
    return tourImage?.data[0]?.url;
  } catch (error) {
    return null;
  }
};
