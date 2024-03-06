import { FaRocketchat } from "react-icons/fa";
import { PiMountains } from "react-icons/pi";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

import { AssistantTemperatureModes, NavLink } from "./modals";

export const navLinks: NavLink[] = [
  {
    href: "/assistant/chat",
    title: "Chat",
    icon: <FaRocketchat />,
  },
  {
    href: "/assistant/tour",
    title: "Tours",
    icon: <PiMountains />,
  },
  {
    href: "/assistant/tour/new-tour",
    title: "New tour",
    icon: <GiAirplaneDeparture />,
  },
  {
    href: "/assistant/profile",
    title: "Profile",
    icon: <CgProfile />,
  },
];

export const assistantTemperatureModes: AssistantTemperatureModes[] = [
  {
    tempTitle: "Creative",
    tempValue: 0,
  },
  {
    tempTitle: "Balanced",
    tempValue: 1,
  },
  {
    tempTitle: "Precise",
    tempValue: 2,
  },
];
