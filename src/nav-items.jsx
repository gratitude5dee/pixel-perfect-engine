import { HomeIcon, MessageSquare } from "lucide-react";
import Index from "./pages/Index.jsx";
import Messages from "./pages/Messages.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Messages",
    to: "/messages",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <Messages />,
  },
];
