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
          <PenSquare className="text-blue-500 h-6 w-6 cursor-pointer" onClick={() => navigate('/new-message')} />
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
          5D
        </Avatar>
        <p className="text-center mt-3 text-xl font-semibold">5-Dee</p>
      </motion.div>

      <div className="mt-6 space-y-1">
        <MessageItem 
          avatar="PG"
          name="Paul Graham"
          message="Make sure to send out that invest...."
          time="Yesterday"
          onClick={() => handleMessageClick('Paul Graham')}
        />
        <MessageItem 
          avatar="22"
          name="22395"
          message="Your Intro verification code is: 3333"
          time="Yesterday"
          onClick={() => handleMessageClick('22395')}
        />
        <MessageItem 
          avatar="64"
          name="64132"
          message="Luma: Sam Altman invited you to OpenA..."
          time="Yesterday"
          isSelected={true}
          onClick={() => handleMessageClick('64132')}
        />
        <MessageItem 
          avatar="+1"
          name="+1 (510) 555-5555"
          message="Hey, Grat! Starting a guided m..."
          time="Yesterday"
          onClick={() => handleMessageClick('+1 (510) 555-5555')}
        />
        <MessageItem 
          avatar="DG"
          name="David Goggins"
          message="Get up and go get it!"
          time="Yesterday"
          onClick={() => handleMessageClick('David Goggins')}
        />
        <MessageItem 
          avatar="44"
          name="44444"
          message="Great job with leg day; arms..."
          time="Wednesday"
          onClick={() => handleMessageClick('44444')}
        />
      </div>
    </div>
  );
};

export default Messages;
