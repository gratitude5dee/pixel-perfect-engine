import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { PenSquare, Search, Mic, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const MessageItem = ({ avatar, name, message, time, isSelected, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`flex items-center p-4 ${isSelected ? 'bg-blue-600' : 'hover:bg-gray-900'} transition-colors duration-200 cursor-pointer`}
    onClick={onClick}
  >
    <Avatar className="h-12 w-12 mr-4 bg-gray-700 flex items-center justify-center text-lg font-semibold">
      {avatar}
    </Avatar>
    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <span className={`font-semibold ${isSelected ? 'text-white' : 'text-gray-200'}`}>{name}</span>
        <span className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{time}</span>
      </div>
      <p className={`truncate ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>{message}</p>
    </div>
  </motion.div>
);

const Messages = () => {
  const navigate = useNavigate();

  const handleMessageClick = (name) => {
    navigate(`/chat/${name}`);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-10 bg-black"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <ChevronLeft className="text-blue-500 h-6 w-6" />
          <h1 className="text-2xl font-bold">Messages</h1>
          <PenSquare className="text-blue-500 h-6 w-6 cursor-pointer" onClick={() => navigate('/chat/new')} />
        </div>
        
        <div className="px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <Input 
              className="w-full bg-gray-900 text-white pl-10 pr-10 py-2 rounded-full border-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />
            <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 mb-8"
      >
        <Avatar className="mx-auto h-24 w-24 text-4xl font-semibold bg-gray-700 ring-4 ring-blue-500">
          JG
        </Avatar>
        <p className="text-center mt-3 text-xl font-semibold">Jaspreet</p>
      </motion.div>

      <div className="mt-6 space-y-1">
        <MessageItem 
          avatar="I"
          name="Ishu"
          message="Make sure it's charged and put it near tatagaru"
          time="Yesterday"
          onClick={() => handleMessageClick('Ishu')}
        />
        <MessageItem 
          avatar="22"
          name="22395"
          message="Your Intro verification code is: 9217"
          time="Yesterday"
          onClick={() => handleMessageClick('22395')}
        />
        <MessageItem 
          avatar="64"
          name="64132"
          message="Luma: Lisa Yu invited you to AWS and 99VC Presents: GTM/Sales Power Hou..."
          time="Yesterday"
          isSelected={true}
          onClick={() => handleMessageClick('64132')}
        />
        <MessageItem 
          avatar="+1"
          name="+1 (510) 332-1576"
          message="Hey, Avinav! Kick off your LDW with ThreeTrees & CB delivery! 💐🌸..."
          time="Yesterday"
          onClick={() => handleMessageClick('+1 (510) 332-1576')}
        />
        <MessageItem 
          avatar={
            <div className="relative h-full w-full">
              <span className="absolute top-0 left-0 text-xs">D</span>
              <span className="absolute top-0 right-0 text-xs">M</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs">I</span>
            </div>
          }
          name="Dad, Mom & Ishu"
          message="In a meeting till 12:30"
          time="Yesterday"
          onClick={() => handleMessageClick('Dad, Mom & Ishu')}
        />
        <MessageItem 
          avatar="39"
          name="39781"
          message="AI for Science Research Frontier: Paper Reading is tomorrow 6:30pm...."
          time="Wednesday"
          onClick={() => handleMessageClick('39781')}
        />
      </div>
    </div>
  );
};

export default Messages;
