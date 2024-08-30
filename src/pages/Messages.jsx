import React from 'react';
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { PenSquare, Search, Mic } from "lucide-react";

const MessageItem = ({ avatar, name, message, time, isSelected }) => (
  <div className={`flex items-center p-4 ${isSelected ? 'bg-blue-500' : ''}`}>
    <Avatar className="h-12 w-12 mr-4">
      {avatar}
    </Avatar>
    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-gray-400 text-sm">{time}</span>
      </div>
      <p className="text-gray-400 truncate">{message}</p>
    </div>
  </div>
);

const Messages = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex justify-between items-center p-4">
        <span className="text-blue-500 text-lg font-semibold">Edit</span>
        <h1 className="text-2xl font-bold">Messages</h1>
        <PenSquare className="text-blue-500 h-6 w-6" />
      </div>
      
      <div className="px-4 py-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <Input 
            className="w-full bg-gray-800 text-white pl-10 pr-10 py-2 rounded-lg"
            placeholder="Search"
          />
          <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
        </div>
      </div>

      <div className="mt-4">
        <Avatar className="mx-auto h-24 w-24 text-4xl font-semibold bg-gray-600">
          JG
        </Avatar>
        <p className="text-center mt-2 text-lg">Jaspreet</p>
      </div>

      <div className="mt-6">
        <MessageItem 
          avatar={<span className="text-xl">I</span>}
          name="Ishu"
          message="Make sure it's charged and put it near tatagaru"
          time="Yesterday"
        />
        <MessageItem 
          avatar={<span></span>}
          name="22395"
          message="Your Intro verification code is: 9217"
          time="Yesterday"
        />
        <MessageItem 
          avatar={<span></span>}
          name="64132"
          message="Luma: Lisa Yu invited you to AWS and 99VC Presents: GTM/Sales Power Hou..."
          time="Yesterday"
          isSelected={true}
        />
        <MessageItem 
          avatar={<span></span>}
          name="+1 (510) 332-1576"
          message="Hey, Avinav! Kick off your LDW with ThreeTrees & CB delivery! 💐🌸..."
          time="Yesterday"
        />
        <MessageItem 
          avatar={
            <div className="bg-gray-600 h-full w-full flex items-center justify-center">
              <span className="text-xs">I</span>
              <span className="text-xs absolute top-0 right-0">D</span>
              <span className="text-xs absolute bottom-0 left-0">M</span>
            </div>
          }
          name="Dad, Mom & Ishu"
          message="In a meeting till 12:30"
          time="Yesterday"
        />
        <MessageItem 
          avatar={<span></span>}
          name="39781"
          message="AI for Science Research Frontier: Paper Reading is tomorrow 6:30pm...."
          time="Wednesday"
        />
      </div>
    </div>
  );
};

export default Messages;