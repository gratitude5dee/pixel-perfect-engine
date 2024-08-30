import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Plus, Smile, Mic } from "lucide-react";

const NewMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <span className="text-lg font-semibold">New Message</span>
        <button onClick={() => navigate('/messages')} className="text-blue-500">Cancel</button>
      </div>
      <div className="flex-grow p-4">
        <div className="flex items-center mb-4">
          <span className="text-gray-400 mr-2">To:</span>
          <Input className="flex-grow bg-transparent border-none text-white focus:ring-0" />
          <Plus className="text-blue-500 h-6 w-6" />
        </div>
      </div>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center">
          <Plus className="text-gray-400 h-6 w-6 mr-2" />
          <Input 
            className="flex-grow bg-gray-800 text-white rounded-full px-4 py-2 focus:ring-0"
            placeholder="iMessage"
          />
          <Smile className="text-gray-400 h-6 w-6 ml-2" />
          <Mic className="text-gray-400 h-6 w-6 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
