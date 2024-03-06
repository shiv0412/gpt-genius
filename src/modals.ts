export interface IMessage {
  role: string;
  content: string;
}

export interface NavLink {
  href: string;
  title: string;
  icon: any;
}

export interface AssistantTemperatureModes {
  tempTitle: string;
  tempValue: number;
}

export interface ITour {
  city: string;
  country: string;
}

export interface ITourDetails {
  city: string;
  country: string;
  title: string;
  description: string;
  stops: string[];
}
